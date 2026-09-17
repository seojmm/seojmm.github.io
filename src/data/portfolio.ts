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
  period: Localized;
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
export interface Patent {
  title: Localized;
  inventors: string[];
  number: string;
  filed: string;
  links: Link[];
}
export interface SkillGroup {
  label: Localized;
  items: Localized[];
}

// Source: the owner's CV, supplied on 2026-09-17.
// Publication titles, venues, and patent number follow that CV.
// The owner corrected their English name to Jimyeung Seo on 2026-09-18.
export const profile = {
  name: { en: 'Jimyeung Seo', ko: '서지명' },
  authorNames: ['Jimyeung Seo'],
  affiliation: {
    en: 'M.S. Student in Computer Science and Engineering, Konkuk University',
    ko: '건국대학교 컴퓨터공학 석사과정',
  },
  tagline: {
    en: 'Graph Neural Networks · Knowledge Distillation · Recommender Systems',
    ko: '그래프 신경망 · 지식 증류 · 추천 시스템',
  },
  photo: '',
  cv: '',
  email: 'myungs8562@gmail.com',
  scholar: '',
  github: 'https://github.com/seojmm',
  linkedin: 'https://www.linkedin.com/in/jimyeungseo',
};

export const interests: Localized[] = [
  { en: 'Graph Neural Networks', ko: '그래프 신경망 (Graph Neural Networks)' },
  { en: 'Knowledge Distillation', ko: '지식 증류 (Knowledge Distillation)' },
  { en: 'Recommender Systems', ko: '추천 시스템 (Recommender Systems)' },
];

export const publications: Publication[] = [
  {
    title: 'Internalizing Negation-Gated Logical Rules into LLMs for Document-Level Relation Extraction',
    authors: ['Hye-Yoon Baek', 'Sangjun Ji', 'Jimyeung Seo', 'Hae-Yoon Koo', 'Xiongnan Jin', 'Byungkook Oh'],
    venue: 'Findings of the Association for Computational Linguistics: EMNLP',
    year: 2026,
    links: [],
  },
  {
    title: 'Diversifying Differentiable Graph Retrieval with Topic-Adaptive Multi-Intent Learning',
    authors: ['Dong-Cheon Lee', 'Ji-Yeon Park', 'Hye-Yoon Baek', 'Jimyeung Seo', 'Seyeong Kim', 'Byungkook Oh'],
    venue: 'The ACM Web Conference (WWW ’26)',
    year: 2026,
    links: [],
  },
  {
    title: 'Image-Guided Debiasing Distillation with Preference Alignment Across Multi-News Histories',
    authors: ['Jimyeung Seo', 'Eun-Yeong Jo', 'Hye-Yoon Baek', 'Dongcheon Lee', 'Xiongnan Jin', 'Byungkook Oh'],
    venue: 'ACM International Conference on Web Search and Data Mining (WSDM ’26)',
    year: 2026,
    links: [],
  },
  {
    title: 'Interaction-Grounded Semantic Graph Refinement for LLM-based Recommendation',
    authors: ['Wooseok Jeong', 'Young-Jin Kim', 'Hae-Yoon Koo', 'Jimyeung Seo', 'Jinho Choi', 'Byungkook Oh'],
    venue: 'IEEE Access',
    year: 2025,
    links: [],
  },
  {
    title: 'Relation-Faceted Graph Pooling with LLM Guidance for Dynamic Span-Aware Information Extraction',
    authors: ['Hye-Yoon Baek', 'Jinho Choi', 'Jimyeung Seo', 'Xiongnan Jin', 'Dongcheon Lee', 'Byungkook Oh'],
    venue: 'ACM International Conference on Information and Knowledge Management (CIKM ’25)',
    year: 2025,
    links: [],
  },
];

export const patents: Patent[] = [
  {
    title: {
      en: 'Multimodal Data Distillation Method, and Triple-based News Refinement and Recommendation Method',
      ko: '멀티모달 데이터 증류 방법 및 트리플 기반 뉴스 정제·추천 방법',
    },
    inventors: ['Jimyeung Seo', 'Byungkook Oh'],
    number: '10-2025-016170',
    filed: '2025-10-31',
    links: [],
  },
];

export const projects: Project[] = [
  {
    title: {
      en: 'Development of Multi-Turn Question Answering Technology Based on a Manufacturing-Domain Knowledge Graph',
      ko: '제조 도메인 지식 그래프 기반 멀티턴 질의응답 기술 개발',
    },
    description: {
      en: 'Supported by LG Electronics Production Engineering Research Institute.',
      ko: 'LG전자 생산기술원 지원 과제.',
    },
    period: { en: 'May 2026 — Present', ko: '2026.05 — 현재' },
    tags: ['Knowledge Graph', 'Multi-Turn QA'],
    links: [],
  },
  {
    title: { en: 'Graph-Based Threat Tracking Analysis', ko: '그래프 기반 위협 추적 분석' },
    description: { en: 'Supported by LIG Nex1.', ko: 'LIG넥스원 지원 과제.' },
    period: { en: 'Oct 2025 — Present', ko: '2025.10 — 현재' },
    tags: ['Graph Analysis'],
    links: [],
  },
  {
    title: {
      en: 'Recommendation System Model Design Consulting and Case Study',
      ko: '추천 시스템 모델 설계 컨설팅 및 사례 연구',
    },
    description: {
      en: 'Part of an Agency for Defense Development (ADD) program led by Hanwha Systems.',
      ko: '한화시스템이 주관하는 국방과학연구소(ADD) 사업 참여 과제.',
    },
    period: { en: 'Sep 2025 — Present', ko: '2025.09 — 현재' },
    tags: ['Recommender Systems'],
    links: [],
  },
  {
    title: {
      en: 'Graph-Structured Interaction for Improving Reliability and Controllability of Multimodal Generative Models',
      ko: '멀티모달 생성 모델의 신뢰성 및 제어 가능성 향상을 위한 그래프 구조 상호작용',
    },
    description: {
      en: 'Supported by the National Research Foundation of Korea, funded by the Ministry of Science and ICT.',
      ko: '과학기술정보통신부 재원으로 한국연구재단이 지원하는 과제.',
    },
    period: { en: 'Sep 2024 — Present', ko: '2024.09 — 현재' },
    tags: ['Multimodal Generative Models', 'Graph-Structured Interaction'],
    links: [],
  },
];

export const experiences: Experience[] = [
  {
    kind: 'education',
    period: { en: 'Mar 2025 — Present', ko: '2025.03 — 현재' },
    title: { en: 'M.S. in Computer Science and Engineering (in progress)', ko: '컴퓨터공학 석사과정' },
    organization: { en: 'Konkuk University, Seoul, South Korea', ko: '건국대학교 · 서울' },
    description: { en: 'Supervisor: Byungkook Oh', ko: '지도교수: 오병국' },
  },
  {
    kind: 'education',
    period: { en: 'Mar 2019 — Feb 2025', ko: '2019.03 — 2025.02' },
    title: { en: 'B.S. in Computer Science and Engineering', ko: '컴퓨터공학 학사' },
    organization: { en: 'Konkuk University, Seoul, South Korea', ko: '건국대학교 · 서울' },
    description: { en: 'GPA: 3.96 / 4.5 · Major GPA: 4.0 / 4.5', ko: '전체 평점: 3.96 / 4.5 · 전공 평점: 4.0 / 4.5' },
  },
];

export const awards: Award[] = [
  {
    year: 2026,
    title: { en: 'AI Seoul Tech Research Support Program Scholar (Master’s Degree)', ko: 'AI Seoul Tech 연구지원 프로그램 장학생 (석사과정)' },
    organization: { en: '', ko: '' },
  },
  {
    year: 2025,
    title: { en: 'Research Scholarship (Fall 2025)', ko: '연구장학금 (2025학년도 2학기)' },
    organization: { en: 'Konkuk University', ko: '건국대학교' },
  },
  {
    year: 2025,
    title: { en: 'AI Agent Contest — Excellence Award (3rd Place)', ko: 'AI Agent 경진대회 — 우수상 (3위)' },
    organization: { en: 'Kakao × KIISE', ko: '카카오 × 한국정보과학회' },
  },
  {
    year: 2025,
    title: { en: 'Dean’s List', ko: 'Dean’s List (학업 우수)' },
    organization: { en: 'Konkuk University', ko: '건국대학교' },
  },
  {
    year: 2023,
    title: { en: '1st Konkuk University Hackathon — Excellence Award (3rd Place)', ko: '제1회 건국대학교 해커톤 — 우수상 (3위)' },
    organization: { en: 'Konkuk University', ko: '건국대학교' },
  },
];

export const skills: SkillGroup[] = [
  {
    label: { en: 'Programming & tools', ko: '프로그래밍 및 도구' },
    items: ['C/C++', 'Python', 'PyTorch', 'Git', 'Docker'].map(item => ({ en: item, ko: item })),
  },
  {
    label: { en: 'Languages', ko: '언어' },
    items: [
      { en: 'Korean (Native)', ko: '한국어 (모국어)' },
      { en: 'English (OPIc IH)', ko: '영어 (OPIc IH)' },
    ],
  },
];
