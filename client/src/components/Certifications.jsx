import { motion } from 'framer-motion';

export const Certifications = ({ data }) => {
  const parseCourseDate = (value) => {
    if (!value) return 0;
    if (/^\d{4}$/.test(value.trim())) return new Date(`${value}-12-31`).getTime();
    const parsed = Date.parse(value);
    return Number.isNaN(parsed) ? 0 : parsed;
  };

  const sortedCourses = [...(data.courses || [])].sort(
    (a, b) => parseCourseDate(b.date) - parseCourseDate(a.date)
  );

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Certifications
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            Verified learning milestones with score details
          </motion.p>
        </div>

        <div className="timeline cert-timeline">
          {sortedCourses.map((course, idx) => (
            <motion.article
              key={idx}
              className="timeline-item certification-row"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
            >
              <div className="cert-header">
                <h3>{course.title}</h3>
                <p>{course.provider} • {course.date}</p>
              </div>

              <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {course.tags?.map((tag, tagIdx) => (
                  <span key={tagIdx} className="pill">{tag}</span>
                ))}
              </div>

              {(course.score || course.recognition) && (
                <p style={{ marginTop: '12px' }}>
                  {course.score ? <strong>Score: {course.score}</strong> : null}
                  {course.score && course.recognition ? ' • ' : ''}
                  {course.recognition ? <strong>{course.recognition}</strong> : null}
                </p>
              )}

              {course.breakdown && (
                <div className="cert-breakdown">
                  <span>Online Assignments: {course.breakdown.onlineAssignments}</span>
                  <span>Proctored Exam: {course.breakdown.proctoredExam}</span>
                </div>
              )}

              {course.details?.length ? (
                <ul className="cert-details">
                  {course.details.map((item, detailsIdx) => (
                    <li key={detailsIdx}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {course.verify ? (
                <a href={course.verify} target="_blank" rel="noopener noreferrer" className="cert-link">
                  Verify Certificate
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
