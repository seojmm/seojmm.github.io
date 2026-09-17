export type Language = 'en' | 'ko';
export type Localized = Record<Language, string>;
export interface Link { label: string; href: string }
export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  links: Link[];
  note?: Localized;
}
export interface Project {
  title: Localized;
  description: Localized;
  period: string;
  tags: string[];
  links: Link[];
  role?: Localized;
}
export interface Experience {
  period: Localized;
  title: Localized;
  organization: Localized;
  description?: Localized;
  kind: 'education' | 'work';
}
export interface Award {
  year: number;
  title: Localized;
  organization: Localized;
}

// Only verified information belongs here. See templates/content.ts for examples.
export const profile = {
  name: { en: 'Jimyeung Seo', ko: 'Jimyeung Seo' },
  initials: 'JS',
  handle: 'seojmm',
  affiliation: { en: '', ko: '' },
  tagline: {
    en: 'A personal collection of research, projects, and ideas.',
    ko: '연구와 프로젝트, 그리고 생각을 차곡차곡 기록하는 공간입니다.',
  },
  // Set a local public/ path after adding the actual image or PDF.
  photo: '',
  cv: '',
  email: '',
  scholar: '',
  github: 'https://github.com/seojmm',
};

export const interests: Localized[] = [];
export const publications: Publication[] = [];
export const projects: Project[] = [
  {
    title: { en: 'Personal portfolio', ko: '개인 포트폴리오' },
    description: {
      en: 'The home for my work. A bilingual portfolio bringing research, projects, and experience together in one place.',
      ko: '연구, 프로젝트, 이력을 한곳에 정리하는 개인 웹사이트입니다. 영문과 국문으로 기록을 이어갑니다.',
    },
    period: '2026 —',
    tags: ['Astro', 'TypeScript', 'GitHub Pages'],
    links: [{ label: 'GitHub', href: 'https://github.com/seojmm/seojmm.github.io' }],
  },
];
export const experiences: Experience[] = [];
export const awards: Award[] = [];
