import { motion, useScroll, useTransform } from 'framer-motion';

const orbConfig = [
  { className: 'backdrop-orb orb-a', x: [0, 60, -20, 0], y: [0, -40, 30, 0], duration: 18 },
  { className: 'backdrop-orb orb-b', x: [0, -50, 40, 0], y: [0, 25, -35, 0], duration: 20 },
  { className: 'backdrop-orb orb-c', x: [0, 35, -30, 0], y: [0, 50, -20, 0], duration: 22 },
];

export const MotionBackdrop = () => {
  const { scrollYProgress } = useScroll();
  const layerY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <motion.div className="motion-backdrop" style={{ y: layerY }}>
      {orbConfig.map((orb) => (
        <motion.div
          key={orb.className}
          className={orb.className}
          animate={{ x: orb.x, y: orb.y }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="backdrop-grid" />
      <div className="backdrop-noise" />
    </motion.div>
  );
};

