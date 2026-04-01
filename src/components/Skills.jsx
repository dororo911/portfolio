import { motion } from 'framer-motion';
import { Server, Monitor, Database, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { SKILL_GROUPS } from '../data/portfolioData';

const iconMap = { Server, Monitor, Database, Wrench };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <SectionHeading
        title="Skills"
        subtitle="Technologies I use to build reliable software"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid sm:grid-cols-2 gap-6"
      >
        {SKILL_GROUPS.map((group) => {
          const Icon = iconMap[group.icon] || Server;
          return (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="glass-card glow-border p-6 group hover:bg-surface-light/80 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{group.title}</h3>
                  <p className="text-white/40 text-xs">{group.description}</p>
                </div>
              </div>

              {/* Skills list with bars */}
              <div className="space-y-3.5 mt-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center mb-1.5">
                      <span className="text-white/70 text-sm font-medium">{skill.name}</span>
                    </div>
                    
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
