export interface Position2D {
  x: number; // Percentage from left (0-100)
  y: number; // Percentage from top (0-100)
}

export interface Hotspot {
  id: string;
  position: Position2D;
  title: string;
  description: string;
  details: string;
  type: "feature" | "tech" | "demo" | "info";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "robotics" | "artificial-intel" | "saas-and-web" | "game" | "ai" | "mobile" | "web" | "hardware";
  technologies: string[];
  imageUrl: string;
  hotspots: Hotspot[];
  createdAt: Date;
  // Additional fields from your existing data
  filename: string;
  date: string;
  link: string;
  mediaUrl: string;
}