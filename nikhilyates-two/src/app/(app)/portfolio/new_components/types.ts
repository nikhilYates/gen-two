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
  category: "web" | "mobile" | "desktop" | "game";
  technologies: string[];
  imageUrl: string;
  hotspots: Hotspot[];
  createdAt: Date;
}

export interface ListProjectsResponse {
  projects: Project[];
}

export interface GetProjectResponse {
  project: Project;
}