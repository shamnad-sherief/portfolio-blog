import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Shamnad Sherief",
  EMAIL: "shamnad@shamnadsherief.me",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Shamnad Sherief | Systems Engineer & Software Developer (Muhammed Shamnad)",
  DESCRIPTION: "Shamnad Sherief (Muhammed Shamnad) is a Systems Engineer & Software Developer specializing in Rust, Linux, container runtime systems, and backend infrastructure.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Articles and insights on systems programming, Rust, Linux internals, and infrastructure engineering by Shamnad Sherief.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Professional software and systems engineering experience of Shamnad Sherief (Muhammed Shamnad).",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Open-source projects, database engines, and systems tools built by Shamnad Sherief.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/shamnadsherief"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/shamnadsherief",
  },
  {
    NAME: "StackOverflow",
    HREF: "https://stackoverflow.com/users/15167371/shamnad-sherief",
  }
];
