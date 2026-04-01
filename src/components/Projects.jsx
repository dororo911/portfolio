import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <SectionHeading
        title="Featured Projects"
        subtitle="Real-world applications showcasing backend architecture, clean code, and modern tools"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="group relative glass-card overflow-hidden rounded-2xl border border-surface-border hover:border-primary/40 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-[5]" />
            </div>

            {/* Content */}
            <div className="p-6 relative">
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono text-lavender/80 bg-lavender/5 border border-lavender/15 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white/70 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300"
                  >
                    <Code2 size={14} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-primary/80 hover:bg-primary border border-primary/50 rounded-lg transition-all duration-300 hover:shadow-glow"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Subtle corner glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
