import fs from "node:fs";
import path from "node:path";
import { activities as baseActivities } from "@/data/activities";
import { notes as baseNotes } from "@/data/notes";
import { projects as baseProjects } from "@/data/projects";
import type { Activity, Note, Project } from "@/types";

type FrontmatterValue = string | string[] | boolean;
type Frontmatter = Record<string, FrontmatterValue>;

const contentRoot = path.join(process.cwd(), "content");

function markdownFiles(folder: string) {
  const directory = path.join(contentRoot, folder);

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => path.join(directory, file));
}

function parseMarkdown(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return { frontmatter: {}, content: raw.trim() };
  }

  return {
    frontmatter: parseFrontmatter(match[1]),
    content: match[2].trim(),
  };
}

function parseFrontmatter(block: string): Frontmatter {
  const frontmatter: Frontmatter = {};
  let currentListKey: string | null = null;

  for (const line of block.split(/\r?\n/)) {
    if (!line.trim()) {
      continue;
    }

    const listItem = line.match(/^\s*-\s+(.*)$/);
    if (listItem && currentListKey) {
      const currentValue = frontmatter[currentListKey];
      const list = Array.isArray(currentValue) ? currentValue : [];
      frontmatter[currentListKey] = [...list, String(parseScalar(listItem[1]))];
      continue;
    }

    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) {
      currentListKey = null;
      continue;
    }

    const [, key, value] = pair;
    currentListKey = null;

    if (value.trim() === "") {
      frontmatter[key] = [];
      currentListKey = key;
      continue;
    }

    frontmatter[key] = parseScalar(value);
  }

  return frontmatter;
}

function parseScalar(value: string): FrontmatterValue {
  const trimmed = value.trim();

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => stripQuotes(item.trim()))
      .filter(Boolean);
  }

  return stripQuotes(trimmed);
}

function stripQuotes(value: string) {
  return value.replace(/^["']|["']$/g, "");
}

function stringValue(frontmatter: Frontmatter, key: string, fallback = "") {
  const value = frontmatter[key];
  return typeof value === "string" ? value : fallback;
}

function arrayValue(frontmatter: Frontmatter, key: string, fallback: string[] = []) {
  const value = frontmatter[key];

  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim()) {
    return value.split(",").map((item) => item.trim());
  }

  return fallback;
}

function booleanValue(frontmatter: Frontmatter, key: string, fallback = false) {
  const value = frontmatter[key];
  return typeof value === "boolean" ? value : fallback;
}

function slugFromFile(filePath: string) {
  return path.basename(filePath, ".md");
}

function markdownNotes(): Note[] {
  return markdownFiles("notes").map((filePath) => {
    const { frontmatter, content } = parseMarkdown(
      fs.readFileSync(filePath, "utf8"),
    );

    return {
      slug: stringValue(frontmatter, "slug", slugFromFile(filePath)),
      title: stringValue(frontmatter, "title", slugFromFile(filePath)),
      date: stringValue(frontmatter, "date"),
      summary: stringValue(
        frontmatter,
        "summary",
        content.replace(/\s+/g, " ").slice(0, 120),
      ),
      tags: arrayValue(frontmatter, "tags"),
      content,
    };
  });
}

function markdownActivities(): Activity[] {
  return markdownFiles("activities").map((filePath) => {
    const { frontmatter, content } = parseMarkdown(
      fs.readFileSync(filePath, "utf8"),
    );

    return {
      title: stringValue(frontmatter, "title", slugFromFile(filePath)),
      type: stringValue(frontmatter, "type", "Activity"),
      period: stringValue(frontmatter, "period"),
      theme: stringValue(frontmatter, "theme"),
      details: arrayValue(frontmatter, "details", content ? [content] : []),
      evidence: stringValue(frontmatter, "evidence") || undefined,
      category: stringValue(frontmatter, "category", "기타"),
    };
  });
}

function markdownProjects(): Project[] {
  return markdownFiles("projects").map((filePath) => {
    const { frontmatter, content } = parseMarkdown(
      fs.readFileSync(filePath, "utf8"),
    );
    const slug = stringValue(frontmatter, "slug", slugFromFile(filePath));
    const title = stringValue(frontmatter, "title", slug);
    const problem = stringValue(frontmatter, "problem", content);
    const myContribution = arrayValue(
      frontmatter,
      "myContribution",
      arrayValue(frontmatter, "contributions", ["추가 예정"]),
    );
    const result = stringValue(frontmatter, "result");
    const interviewPoints = arrayValue(frontmatter, "interviewPoints");
    const evidence = arrayValue(frontmatter, "evidence").map((item) => ({
      label: "Evidence",
      description: item,
    }));

    return {
      slug,
      title,
      type: stringValue(frontmatter, "type", "Project"),
      period: stringValue(frontmatter, "period"),
      theme: stringValue(frontmatter, "theme", title),
      details: arrayValue(frontmatter, "details"),
      problem,
      myContribution,
      bottleneck: stringValue(frontmatter, "bottleneck"),
      solution: stringValue(frontmatter, "solution"),
      result,
      retrospective: stringValue(frontmatter, "retrospective"),
      interviewPoints,
      techContext: stringValue(frontmatter, "techContext"),
      shortProblem: stringValue(frontmatter, "shortProblem", problem),
      shortAction: stringValue(frontmatter, "shortAction", myContribution[0]),
      shortResult: stringValue(frontmatter, "shortResult", result),
      shortQuestion: stringValue(
        frontmatter,
        "shortQuestion",
        interviewPoints[0] ?? "",
      ),
      privateCode: booleanValue(frontmatter, "privateCode"),
      githubUrl: stringValue(frontmatter, "githubUrl") || undefined,
      demoUrl: stringValue(frontmatter, "demoUrl") || undefined,
      screenshots: arrayValue(frontmatter, "screenshots"),
      evidence: evidence.length > 0 ? evidence : undefined,
      featured: booleanValue(frontmatter, "featured"),
    };
  });
}

function byNewestDate(a: Note, b: Note) {
  return b.date.localeCompare(a.date);
}

export const notes = [...markdownNotes(), ...baseNotes].sort(byNewestDate);
export const projects = [...markdownProjects(), ...baseProjects];
export const activities = [...markdownActivities(), ...baseActivities];
