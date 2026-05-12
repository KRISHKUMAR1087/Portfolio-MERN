import { motion } from 'framer-motion';
import {
  SiC,
  SiCplusplus,
  SiPhp,
  SiTypescript,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiVercel,
  SiNetlify,
  SiAngular,
  SiApachespark,
  SiNodedotjs,
  SiNodemon,
  SiNpm,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiAdobe,
  SiCanva,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiScikitlearn,
  SiTensorflow,
  SiGithub,
  SiGit,
  SiCisco,
  SiNotion,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { BiLogoVisualStudio } from 'react-icons/bi';

export const About = ({ data }) => {
  const skillIcons = {
    C: SiC,
    'C++': SiCplusplus,
    PHP: SiPhp,
    TypeScript: SiTypescript,
    Python: SiPython,
    Java: FaJava,
    JavaScript: SiJavascript,
    HTML5: SiHtml5,
    CSS3: SiCss3,
    SQL: SiMysql,
    MySQL: SiMysql,
    Vercel: SiVercel,
    Netlify: SiNetlify,
    Anaconda: SiPython,
    'Angular.js': SiAngular,
    'Apache Spark': SiApachespark,
    NodeJS: SiNodedotjs,
    Nodemon: SiNodemon,
    NPM: SiNpm,
    'Next JS': SiNextdotjs,
    React: SiReact,
    TailwindCSS: SiTailwindcss,
    Adobe: SiAdobe,
    Canva: SiCanva,
    Matplotlib: BiLogoVisualStudio,
    NumPy: SiNumpy,
    Pandas: SiPandas,
    Plotly: SiPlotly,
    'scikit-learn': SiScikitlearn,
    TensorFlow: SiTensorflow,
    GitHub: SiGithub,
    Git: SiGit,
    Cisco: SiCisco,
    'Power BI': BiLogoVisualStudio,
    Notion: SiNotion,
  };

  const topSkills = (data.about?.technicalSkills || []).slice(0, 18);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            About Me
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            Building practical software with product focus and engineering discipline
          </motion.p>
        </div>

        <div className="about-panel">
          <motion.div className="about-profile" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src="/images/krish.jpeg" alt="Krish" className="about-photo" />
            <h3>{data.personal?.name}</h3>
            <p>{data.about?.shortBio}</p>
          </motion.div>

          <motion.div className="about-content" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
            <div className="about-metrics">
              <div className="about-metric"><strong>2024-2028</strong><span>B.Tech CE</span></div>
              <div className="about-metric"><strong>7.55/10</strong><span>Current CGPA</span></div>
              <div className="about-metric"><strong>10+</strong><span>Projects & Prototypes</span></div>
            </div>

            <div className="about-rail">
              <h4>Core Tech Stack</h4>
              <div className="skill-flow">
                {topSkills.map((skill, idx) => {
                  const Icon = skillIcons[skill];
                  return (
                    <span key={idx} className="pill skill-pill">
                      {Icon ? <span className="skill-icon"><Icon /></span> : null}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="about-rail">
              <h4>Professional Strengths</h4>
              <div className="skill-flow">
                {data.about?.softSkills?.map((skill, idx) => (
                  <span key={idx} className="pill">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

