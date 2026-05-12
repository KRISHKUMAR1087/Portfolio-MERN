import { motion } from 'framer-motion';

export const Hobbies = ({ data }) => {
  return (
    <section id="hobbies" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Hobbies
          </motion.h2>
        </div>

        <motion.div className="stack-list" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {data.hobbies?.map((hobby, idx) => (
            <motion.article
              key={idx}
              className="list-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
            >
              <h3>{hobby.title}</h3>
              <p style={{ marginTop: '12px', fontSize: '0.95rem' }}>
                {hobby.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
