// 작성 예시입니다. 화면에는 표시되지 않습니다.
// 실제 정보로 바꾼 뒤 src/data/portfolio.ts의 해당 배열에 추가하세요.
import type { Award, Experience, Localized, Patent, Project, Publication, SkillGroup } from '../src/data/portfolio';

export const interest: Localized = { en: 'Research topic', ko: '연구 주제' };

export const publication: Publication = {
  title: 'Original paper title',
  authors: ['Jimyeung Seo', 'Coauthor name'],
  venue: 'Conference or journal name',
  year: 2026,
  // 실제 URL이 있는 링크만 추가합니다. 논문 제목과 학회명은 원문을 유지합니다.
  links: [],
  note: { en: 'Optional note', ko: '선택 설명' },
};

export const project: Project = {
  title: { en: 'Project title', ko: '프로젝트 이름' },
  description: { en: 'Problem, approach, and result.', ko: '문제, 접근 방법, 결과를 소개합니다.' },
  role: { en: 'My contribution', ko: '내가 맡은 역할' },
  period: { en: '2025 — 2026', ko: '2025 — 2026' },
  tags: ['Keyword'],
  links: [],
};

export const experience: Experience = {
  kind: 'education', // education 또는 work
  period: { en: '2024 — Present', ko: '2024 — 현재' },
  title: { en: 'Degree or position', ko: '학위 또는 직책' },
  organization: { en: 'Institution', ko: '학교 또는 소속' },
  description: { en: 'Optional description', ko: '선택 설명' },
};

export const award: Award = {
  year: 2026,
  title: { en: 'Award name', ko: '수상명' },
  organization: { en: 'Organization', ko: '수여 기관' },
};

export const patent: Patent = {
  title: { en: 'Patent application title', ko: '특허 출원명' },
  inventors: ['Jimyeung Seo', 'Co-inventor name'],
  number: '실제 출원번호',
  filed: '2026-01-01',
  links: [],
};

export const skillGroup: SkillGroup = {
  label: { en: 'Programming & tools', ko: '프로그래밍 및 도구' },
  items: [{ en: 'Python', ko: 'Python' }],
};
