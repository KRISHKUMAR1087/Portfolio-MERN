import { motion } from 'framer-motion';

export const Achievements = ({ data }) => {
  const parseAchievementDate = (value) => {
    if (!value) return 0;
    if (/^\d{4}$/.test(value.trim())) return new Date(`${value}-12-31`).getTime();
    const parsed = Date.parse(value);
    return Number.isNaN(parsed) ? 0 : parsed;
  };

  const sortedAchievements = [...(data.achievements || [])].sort(
    (a, b) => parseAchievementDate(b.date) - parseAchievementDate(a.date)
  );

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Recognition and milestones
          </motion.p>
        </div>

        <motion.div className="timeline" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {sortedAchievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.08 }}
            >
              <p className="timeline-eyebrow">{achievement.date}</p>
              <h3>{achievement.title}</h3>
              <p style={{ marginTop: '10px', fontSize: '0.95rem' }}>{achievement.description}</p>
              <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {achievement.tags?.map((tag, tagIdx) => (
                  <span key={tagIdx} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
