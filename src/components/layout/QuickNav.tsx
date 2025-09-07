import { motion } from 'framer-motion';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'activities', label: 'Activities' },
  { id: 'languages', label: 'Languages' },
  { id: 'contact', label: 'Contact' },
];

export function QuickNav() {
  const { activeSection, scrollToSection } = useScrollSpy(
    sections.map(s => s.id),
    120
  );
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <nav className="space-y-1" role="navigation" aria-label="Section navigation">
      {sections.map((section, index) => {
        const isActive = activeSection === section.id;
        
        return (
          <motion.button
            key={section.id}
            initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: prefersReducedMotion ? 0 : index * 0.1,
              duration: prefersReducedMotion ? 0 : 0.4
            }}
            onClick={() => scrollToSection(section.id)}
            className={`
              relative w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-1
              ${isActive 
                ? 'bg-accent/10 text-accent border-l-2 border-accent shadow-sm' 
                : 'text-muted hover:text-ink hover:bg-surface-2/50'
              }
            `}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="relative z-10">
              {section.label}
            </span>
            {isActive && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 bg-accent/5 rounded-lg"
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 30,
                  duration: prefersReducedMotion ? 0 : undefined
                }}
              />
            )}
          </motion.button>
        );
      })}
    </nav>
  );
}
