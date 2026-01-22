import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Zap, Play, Info } from 'lucide-react';
import type { Hotspot } from './types';

interface HotspotDescriptionCardProps {
  hotspot: Hotspot | null;
  allHotspots: Hotspot[];
}

export default function HotspotDescriptionCard({ hotspot, allHotspots }: HotspotDescriptionCardProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'feature':
        return <Zap className="w-5 h-5" />;
      case 'tech':
        return <Code2 className="w-5 h-5" />;
      case 'demo':
        return <Play className="w-5 h-5" />;
      case 'info':
        return <Info className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getColorScheme = (type: string) => {
    switch (type) {
      case 'feature':
        return {
          bg: 'bg-green-50 dark:bg-green-950',
          border: 'border-green-200 dark:border-green-800',
          icon: 'text-green-600 dark:text-green-400',
          title: 'text-green-800 dark:text-green-200',
        };
      case 'tech':
        return {
          bg: 'bg-blue-50 dark:bg-blue-950',
          border: 'border-blue-200 dark:border-blue-800',
          icon: 'text-blue-600 dark:text-blue-400',
          title: 'text-blue-800 dark:text-blue-200',
        };
      case 'demo':
        return {
          bg: 'bg-orange-50 dark:bg-orange-950',
          border: 'border-orange-200 dark:border-orange-800',
          icon: 'text-orange-600 dark:text-orange-400',
          title: 'text-orange-800 dark:text-orange-200',
        };
      case 'info':
        return {
          bg: 'bg-purple-50 dark:bg-purple-950',
          border: 'border-purple-200 dark:border-purple-800',
          icon: 'text-purple-600 dark:text-purple-400',
          title: 'text-purple-800 dark:text-purple-200',
        };
      default:
        return {
          bg: 'bg-gray-50 dark:bg-gray-950',
          border: 'border-gray-200 dark:border-gray-800',
          icon: 'text-gray-600 dark:text-gray-400',
          title: 'text-gray-800 dark:text-gray-200',
        };
    }
  };

  // Show first hotspot by default if none selected
  const displayHotspot = hotspot || allHotspots[0];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Project Details</h2>
        <p className="text-muted-foreground">
          Click on the hotspots in the image to explore different aspects of this project.
        </p>
      </div>

      {/* Main Description Card */}
      <AnimatePresence mode="wait">
        {displayHotspot && (
          <motion.div
            key={displayHotspot.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <div className={`h-full rounded-xl border-2 p-6 ${getColorScheme(displayHotspot.type).bg} ${getColorScheme(displayHotspot.type).border}`}>
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`${getColorScheme(displayHotspot.type).icon}`}>
                  {getIcon(displayHotspot.type)}
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${getColorScheme(displayHotspot.type).title}`}>
                    {displayHotspot.title}
                  </h3>
                  <p className="text-sm text-muted-foreground capitalize">
                    {displayHotspot.type}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-4">
                <p className="text-lg font-medium text-foreground">
                  {displayHotspot.description}
                </p>
                
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {displayHotspot.details}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hotspot Navigation */}
      <div className="mt-6 pt-4 border-t border-border">
        <h4 className="text-sm font-medium text-muted-foreground mb-3">
          All Hotspots ({allHotspots.length})
        </h4>
        <div className="grid grid-cols-1 gap-2">
          {allHotspots.map((spot) => (
            <div
              key={spot.id}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-colors cursor-pointer
                ${spot.id === displayHotspot?.id 
                  ? `${getColorScheme(spot.type).bg} ${getColorScheme(spot.type).border}` 
                  : 'border-border hover:bg-muted'
                }
              `}
            >
              <div className={`${getColorScheme(spot.type).icon}`}>
                {getIcon(spot.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {spot.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {spot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}