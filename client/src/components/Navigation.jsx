import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleSectionSpy = () => {
      const scrollY = window.scrollY + 140;
      let current = 'about';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (scrollY >= el.offsetTop) current = section.id;
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleSectionSpy);
    handleSectionSpy();
    return () => window.removeEventListener('scroll', handleSectionSpy);
  }, []);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={activeSection === section.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(section.id);
                setActiveSection(section.id);
              }}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
      <motion.button
        onClick={toggleTheme}
        className="theme-toggle"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
      </motion.button>
    </motion.nav>
  );
};
