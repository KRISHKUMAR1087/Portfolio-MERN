import { motion } from 'framer-motion';

export const GitHubHighlights = ({ data }) => {
  const githubUrl = data.social?.github || '';
  const username = githubUrl.split('/').filter(Boolean).pop() || 'KRISHKUMAR1087';

  return (
    <section id="github" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            GitHub Highlights
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            Stats, contribution activity, and developer snapshot
          </motion.p>
        </div>

        <div className="github-grid">
          <img alt="GitHub Stats" src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`} />
          <img alt="Top Languages" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`} />
          <img alt="GitHub Streak" src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true`} />
          <img alt="Dev Quote" src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight" />
        </div>
      </div>
    </section>
  );
};

