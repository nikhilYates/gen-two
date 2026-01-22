import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import type { Project } from '../types/portfolioTypes';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const categoryColors = {
    robotics: 'from-blue-500 to-cyan-500',
    'artificial-intel': 'from-green-500 to-emerald-500',
    'saas-and-web': 'from-purple-500 to-pink-500',
    game: 'from-orange-500 to-red-500',
    ai: 'from-violet-500 to-purple-500',
    mobile: 'from-teal-500 to-cyan-500',
    web: 'from-indigo-500 to-blue-500',
    hardware: 'from-amber-500 to-orange-500',
  };

  const categoryIcons = {
    robotics: '🤖',
    'artificial-intel': '🧠',
    'saas-and-web': '🌐',
    game: '🎮',
    ai: '🤖',
    mobile: '📱',
    web: '💻',
    hardware: '⚡',
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-zinc-900 opacity-[70%] hover:opacity-[100%] backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-700 cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 h-[400px] flex flex-col justify-between"
      onClick={onClick}
    >
      {/* Image Header */}
      <div className="h-48 relative overflow-hidden flex-shrink-0">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = `https://picsum.photos/400/300?random=${project.id}&blur=1`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* <div className="absolute top-4 left-4 text-2xl">
          {categoryIcons[project.category]}
        </div> */}
        <div className="absolute top-4 right-4">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ExternalLink size={16} className="text-white" />
          </motion.div>
        </div>

        {/* Project title overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white font-light text-4xl">{project.title}</div>
          <div className="text-white/80 text-sm capitalize">{project.category.replace('-', ' ')} Project</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-white/60 text-sm mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-zinc-700 text-zinc-400 text-xs rounded-full border border-zinc-600">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-white/40 mt-auto">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            {project.date}
          </div>
          <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
            Click to explore →
          </div>
        </div>
      </div>
    </motion.div>
  );
}
