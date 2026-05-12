import { motion } from 'framer-motion';

export const AnimatedCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 45, scale: 0.96, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12, rotateX: -4, rotateY: 4, scale: 1.015 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
};
