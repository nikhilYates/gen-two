import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';
import type { Project, Hotspot } from '../types/portfolioTypes';

interface ProjectViewerProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectViewer({ project, onBack }: ProjectViewerProps) {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-zinc-950"
    >
      {/* Header */}
      <header className="border-b border-zinc-700 bg-zinc-950/95 backdrop-blur">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </button>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">{project.title}</h1>
              <p className="text-white/60 capitalize">{project.category.replace('-', ' ')} Project</p>
            </div>
            
            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 h-[calc(100vh-5rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Side - Image with Hotspots */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white mb-2">Project Overview</h2>
              <p className="text-white/60">{project.description}</p>
            </div>
            
            <div className="flex-1 min-h-0 relative">
              <div className="relative w-full h-full bg-zinc-900 rounded-lg overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/800/600?random=${project.id}`;
                  }}
                />
                
                {/* Hotspots */}
                {project.hotspots.map((hotspot) => (
                  <motion.button
                    key={hotspot.id}
                    className={`absolute w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                      selectedHotspot?.id === hotspot.id
                        ? 'bg-blue-500 border-blue-400 scale-125'
                        : 'bg-white/20 border-white/60 hover:bg-white/40 hover:scale-110'
                    }`}
                    style={{
                      left: `${hotspot.position.x}%`,
                      top: `${hotspot.position.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onClick={() => setSelectedHotspot(hotspot)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-4 pt-4 border-t border-zinc-700">
              <h3 className="text-sm font-medium text-white/60 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="mt-4 pt-4 border-t border-zinc-700">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-white/60">
                  <Calendar size={16} />
                  <span className="text-sm">{project.date}</span>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">View Project</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Hotspot Details */}
          <div className="flex flex-col">
            <div className="bg-zinc-900 rounded-lg p-6 h-full">
              {selectedHotspot ? (
                <motion.div
                  key={selectedHotspot.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col"
                >
                  <div className="mb-4">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      selectedHotspot.type === 'tech' ? 'bg-blue-500/20 text-blue-400' :
                      selectedHotspot.type === 'feature' ? 'bg-green-500/20 text-green-400' :
                      selectedHotspot.type === 'demo' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {selectedHotspot.type.toUpperCase()}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {selectedHotspot.title}
                    </h3>
                    <p className="text-white/60 mb-4">
                      {selectedHotspot.description}
                    </p>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-white/80 leading-relaxed">
                      {selectedHotspot.details}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <div className="text-4xl mb-4">👆</div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      Explore Project Details
                    </h3>
                    <p className="text-white/60">
                      Click on the hotspots in the image to learn more about different aspects of this project.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}