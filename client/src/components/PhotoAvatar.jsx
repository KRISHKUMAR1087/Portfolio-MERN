import { useEffect, useState } from 'react';

export const PhotoAvatar = ({ src, alt, className }) => {
  const [avatarSrc, setAvatarSrc] = useState(src);

  useEffect(() => {
    let cancelled = false;
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = src;

    image.onload = () => {
      if (cancelled) return;

      const size = 320;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) {
        setAvatarSrc(src);
        return;
      }

      ctx.drawImage(image, 0, 0, size, size);
      const imgData = ctx.getImageData(0, 0, size, size);
      const data = imgData.data;

      // Stylize skin/cloth tones into flatter avatar-like blocks.
      for (let i = 0; i < data.length; i += 4) {
        let r = data[i];
        let g = data[i + 1];
        let b = data[i + 2];

        const brightness = (r + g + b) / 3;
        const quant = 36;
        r = Math.round(r / quant) * quant;
        g = Math.round(g / quant) * quant;
        b = Math.round(b / quant) * quant;

        // Slightly boost contrast.
        const contrast = 1.12;
        r = Math.min(255, Math.max(0, (r - 128) * contrast + 128));
        g = Math.min(255, Math.max(0, (g - 128) * contrast + 128));
        b = Math.min(255, Math.max(0, (b - 128) * contrast + 128));

        // Soft edge darkening for comic look.
        if (brightness < 60) {
          r *= 0.82;
          g *= 0.82;
          b *= 0.82;
        }

        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
      }

      ctx.putImageData(imgData, 0, 0);
      setAvatarSrc(canvas.toDataURL('image/png'));
    };

    image.onerror = () => {
      if (!cancelled) setAvatarSrc(src);
    };

    return () => {
      cancelled = true;
    };
  }, [src]);

  return <img src={avatarSrc} alt={alt} className={className} />;
};

