import { api, APIError } from "encore.dev/api";
import type { GetProjectResponse } from "./types";

interface GetProjectParams {
  id: string;
}

// Returns a specific project by ID.
export const get = api<GetProjectParams, GetProjectResponse>(
  { expose: true, method: "GET", path: "/projects/:id" },
  async ({ id }) => {
    // In a real app, this would query a database
    const { projects } = await import("./list").then(m => m.list());
    const project = projects.find(p => p.id === id);
    
    if (!project) {
      throw APIError.notFound("project not found");
    }

    return { project };
  }
);
