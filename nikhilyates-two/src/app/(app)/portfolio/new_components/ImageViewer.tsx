import React from 'react';
import type { Project, Hotspot } from './types';

interface ImageViewer2DProps {
  project: Project;
  onHotspotClick: (hotspot: Hotspot) => void;
  selectedHotspot: Hotspot | null;
}

export default function ImageViewer2D({ project, onHotspotClick, selectedHotspot }: ImageViewer2DProps) {
  const getHotspotColor = (type: string) => {
    switch (type) {
      case 'feature':
        return 'bg-green-500 hover:bg-green-600';
      case 'tech':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'demo':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'info':
        return 'bg-purple-500 hover:bg-purple-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="relative w-full h-full group">
      {/* Project Image */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover rounded-lg shadow-lg"
        onError={(e) => {
          // Fallback to a placeholder if image fails to load
          const target = e.target as HTMLImageElement;
          target.src = `https://picsum.photos/800/600?random=${project.id}`;
        }}
      />
      
      {/* Overlay for better hotspot visibility */}
      <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
      
      {/* Hotspots */}
      {project.hotspots.map((hotspot) => (
        <button
          key={hotspot.id}
          onClick={() => onHotspotClick(hotspot)}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300 z-10
            ${getHotspotColor(hotspot.type)}
            ${selectedHotspot?.id === hotspot.id 
              ? 'scale-150 ring-4 ring-white/50' 
              : 'scale-100 hover:scale-125'
            }
            animate-pulse
          `}
          style={{
            left: `${hotspot.position.x}%`,
            top: `${hotspot.position.y}%`,
          }}
          title={hotspot.title}
        >
          {/* Inner dot for better visibility */}
          <div className="absolute inset-1 bg-white/30 rounded-full"></div>
          
          {/* Pulsing ring effect */}
          <div 
            className={`absolute inset-0 rounded-full border-2 border-current animate-ping
              ${selectedHotspot?.id === hotspot.id ? 'opacity-75' : 'opacity-0 group-hover:opacity-50'}
            `}
            style={{ transform: 'scale(2)' }}
          ></div>
        </button>
      ))}
      
      {/* Hotspot Legend */}
      <div className="absolute bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Features</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Technology</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span>Demo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>Info</span>
          </div>
        </div>
      </div>
    </div>
  );
}