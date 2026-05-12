import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

export const Hero = ({ data }) => {
  const quickStats = [
    { label: 'Projects', value: data.projects?.length || 0 },
    { label: 'Certifications', value: data.courses?.length || 0 },
    { label: 'Hackathons Participation', value: '10' },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    animate: {
      y: [-15, 15, -15],
      boxShadow: [
        '0 20px 60px rgba(108, 99, 255, 0.15)',
        '0 30px 80px rgba(0, 255, 136, 0.25)',
        '0 20px 60px rgba(108, 99, 255, 0.15)',
      ],
      transition: { duration: 4, repeat: Infinity },
    },
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={imageVariants}
            animate="animate"
            className="avatar-wrapper"
          >
            <img
              src={data.personal?.profileImage || '/images/krish.jpeg'}
              onError={(e) => {
                e.currentTarget.src = '/images/krish.jpeg';
              }}
              alt="Profile"
              className="hero-image"
            />
            <motion.div
              className="avatar-glow"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          <motion.h1 variants={itemVariants}>
            {data.personal?.name}
          </motion.h1>

          <motion.p className="subtitle" variants={itemVariants}>
            {data.personal?.title}
          </motion.p>

          <motion.p variants={itemVariants} className="hero-bio">
            {data.personal?.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="hero-stats">
            {quickStats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <strong>{stat.value}+</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="#projects"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See My Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ marginTop: '80px' }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <FiArrowDown size={28} style={{ margin: '0 auto', color: 'var(--accent)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
