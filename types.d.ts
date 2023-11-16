interface Project {
  title: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  previewImages: string[];
  techStack: string[];
  theme?: string;
  links: { live: string; github: string };
  features: { heading: string; content: string; images: string[] }[];
}
