import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Shamnad Sherief",
  EMAIL: "shamnad@shamnadsherief.me",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Systems Engineer specializing in Rust, Linux, and infrastructure development.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on systems programming, Rust, and Linux.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "My professional software and systems engineering experience.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my open-source and systems engineering projects.",
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
