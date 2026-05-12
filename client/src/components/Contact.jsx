import { motion } from 'framer-motion';
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiTwitter,
} from 'react-icons/fi';

export const Contact = ({ data }) => {
  const socialIcons = {
    email: FiMail,
    linkedin: FiLinkedin,
    github: FiGithub,
    instagram: FiInstagram,
    twitter: FiTwitter,
  };

  const socialLinks = [
    { name: 'Email', icon: 'email', url: `mailto:${data.social?.email}`, label: data.social?.email },
    { name: 'LinkedIn', icon: 'linkedin', url: data.social?.linkedin },
    { name: 'GitHub', icon: 'github', url: data.social?.github },
    { name: 'Instagram', icon: 'instagram', url: data.social?.instagram },
    { name: 'X (Twitter)', icon: 'twitter', url: data.social?.twitter },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Always open to interesting projects and opportunities
          </motion.p>
        </div>

        <motion.div className="stack-list" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '860px', margin: '0 auto' }}>
          {socialLinks.map((social, idx) => {
            const Icon = socialIcons[social.icon];
            return (
              <motion.a
                key={idx}
                href={social.url}
                target={social.icon === 'email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="list-row contact-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                whileHover={{ x: 8 }}
                style={{ textDecoration: 'none' }}
              >
                <Icon size={24} style={{ color: 'var(--accent-2)' }} />
                <div>
                  <h4 style={{ marginBottom: '4px' }}>{social.name}</h4>
                  {social.label && (
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                      {social.label}
                    </p>
                  )}
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '80px' }}
        >
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
            © 2025 Darji Krishkumar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
