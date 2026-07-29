import type { MetadataRoute } from "next";
import { notes, projects } from "@/lib/content-data";

const baseUrl = "https://gyumin-archive.vercel.app";
const latestNoteDate = notes[0]?.date ? new Date(notes[0].date) : undefined;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/experience",
    "/courses",
    "/activities",
    "/notes",
    "/resume",
    "/en",
    "/jp",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: route === "/notes" ? latestNoteDate : undefined,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.8 : 0.6,
  }));

  const noteRoutes = notes.map((note) => ({
    url: `${baseUrl}/notes/${note.slug}`,
    lastModified: note.date ? new Date(note.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes, ...noteRoutes];
}
