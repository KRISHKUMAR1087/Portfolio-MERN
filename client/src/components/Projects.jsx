import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

export const Projects = ({ data }) => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A selection of projects I've built
          </motion.p>
        </div>

        <motion.div className="stack-list" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {data.projects?.map((project, idx) => (
            <motion.article
              key={idx}
              className="list-row"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.08 }}
            >
              <div>
                <h3>{project.title}</h3>
                {project.subtitle && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--accent-2)', marginTop: '4px', fontWeight: 500 }}>
                    {project.subtitle}
                  </p>
                )}
              </div>
              <p style={{ marginTop: '12px', fontSize: '0.95rem', lineHeight: '1.8' }}>
                {project.description}
              </p>
              <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags?.map((tag, tagIdx) => (
                  <span key={tagIdx} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '16px',
                    color: 'var(--accent-2)',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                  whileHover={{ x: 5 }}
                >
                  Visit Site <FiExternalLink size={16} />
                </motion.a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
