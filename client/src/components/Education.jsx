import { motion } from 'framer-motion';

export const Education = ({ data }) => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="timeline-eyebrow">School</p>
              <h3>{data.school?.schoolName}</h3>
              {data.school?.results?.map((result, idx) => (
                <div key={idx} className="timeline-row">
                  <strong>{result.title}</strong>
                  <span>{result.percentage} • {result.year}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="timeline-item">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="timeline-eyebrow">College</p>
              <h3>{data.college?.collegeName}</h3>
              <p>{data.college?.university} — {data.college?.program}</p>
              {data.college?.semesters?.map((sem, idx) => (
                <div key={idx} className="timeline-row">
                  <strong>Semester {sem.number}</strong>
                  <span>CGPA: {sem.cgpa}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
