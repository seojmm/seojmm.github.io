# Jimyeung Seo · Personal portfolio

Astro + TypeScript로 구성한 개인 포트폴리오. 기본 국문 `/`, 영문 `/en/` 페이지를 정적 HTML로 생성합니다. 언어 선택은 `KO / EN` 순서이며, 기존 국문 주소 `/ko/`도 유지합니다.

## 실행

Node.js 22.12 이상이 필요하며, 배포에서는 Node.js 24를 사용합니다.

```bash
npm ci
npm run dev
```

개발 서버 주소: http://localhost:4321

```bash
npm run build    # Astro/TypeScript 검사 + dist/ 생성
npm run preview  # 빌드 결과 로컬 확인
```

## 콘텐츠 수정

| 파일 | 내용 |
| --- | --- |
| `src/data/portfolio.ts` | 이름, 소속, 연락처, 관심사, 학력·경력, 논문, 특허 출원, 프로젝트, 수상, 기술·언어 |
| `src/content/about.en.md` | 영문 소개 (Markdown) |
| `src/content/about.ko.md` | 국문 소개 (Markdown) |
| `src/data/translations.ts` | 메뉴, 제목, 빈 상태 문구 |
| `templates/content.ts` | 복사해서 사용할 타입별 예시. 사이트에 표시되지 않음 |
| `src/styles/global.css` | 색상, 글꼴, 여백, 반응형 및 인쇄 스타일 |

`portfolio.ts`의 배열에 실제 항목을 추가하면 화면에 반영됩니다. 논문은 연도 내림차순, 같은 연도에서는 입력 순서대로 표시됩니다. 프로젝트와 경력은 입력 순서를 유지하므로 최신 항목을 먼저 배치하세요. 수상은 항목이 있을 때만 메뉴와 섹션이 표시됩니다.

2026-09-17에 제공받은 CV를 기준으로 학력 2건, 논문 5편, 특허 출원 1건, 프로젝트 4건, 수상·장학 이력 5건과 기술·언어 정보를 반영했습니다. 학위 과정과 프로젝트의 ‘현재’ 표시는 CV 기준이므로 상태가 바뀌면 기간을 갱신하세요. 원본 CV 파일과 개인 전화번호는 배포에 포함하지 않습니다.

본인 영문 이름은 요청에 따라 논문·특허를 포함해 `Jimyeung Seo`로 통일했으며, `profile.authorNames`에 등록하여 강조합니다. 나머지 저자명과 특허 출원번호는 CV 원문 표기를 유지합니다. 논문·특허·프로젝트 URL은 원문에 없어 비워두었습니다. 국문 특허명·프로젝트명은 CV 영문 제목의 번역이며, 공식 국문 명칭이 있다면 교체하세요.

### 사진, CV, 연락처

- 사진을 `public/images/profile.jpg`에 넣고 `profile.photo`를 `/images/profile.jpg`로 지정합니다. 사진은 상단 프로필에 표시되며, 없으면 텍스트만 표시됩니다.
- CV를 `public/files/cv.pdf`에 넣고 `profile.cv`를 `/files/cv.pdf`로 지정합니다.
- `profile.email`, `profile.scholar`, `profile.affiliation`을 채우면 해당 항목이 나타납니다.
- 국문 이름과 영문 이름은 `profile.name.ko`, `profile.name.en`에서 수정하세요.
- 번역은 `{ en: 'English', ko: '한국어' }` 형식입니다. 논문 제목·저자·학회명은 원문을 유지합니다.
- 링크는 실제 목적지가 있는 항목만 넣으세요.

## 디자인

따뜻한 바탕색 `#f3f1ee`, 밝은 문서색 `#fdfcfb`, 짙은 본문색 `#363231`, 저채도 빨간색 `#8b5155`가 기본입니다. `global.css` 상단의 CSS 변수를 바꾸면 전체에 적용됩니다.

폰트는 제목과 본문 모두 **Pretendard Variable 1.3.9**입니다. [Pretendard 공식 배포본](https://github.com/orioncactus/pretendard/tree/v1.3.9)을 `public/fonts/`에 포함하여 외부 CDN 없이 불러옵니다. SIL Open Font License와 저작권 고지는 `public/fonts/OFL-Pretendard.txt`에 있습니다.

화면 가운데 한 열의 CV 문서가 표시되며 프로필·소개 → 연구 관심사 → 학력 및 경력 → 논문 → 특허 출원 → 프로젝트 → 수상 → 기술 및 언어 순서로 이어집니다. 제목과 얇은 구분선으로 영역을 나누고 프로젝트는 문서형 목록으로 표시합니다. 모바일에서는 문서 여백과 프로필 사진 배치를 조정합니다. 본문 건너뛰기, 키보드 포커스, 동작 줄이기 설정과 A4 인쇄 스타일을 지원합니다. 소개와 언어 전환은 JavaScript 없이도 작동합니다.

## GitHub Pages

`astro.config.mjs`에 `https://seojmm.github.io`가 지정되어 있습니다. `.github/workflows/deploy.yml`은 `main` push 또는 수동 실행 시 검사·빌드 후 Pages에 배포합니다.

1. GitHub 저장소의 **Settings → Pages → Source**를 **GitHub Actions**로 설정합니다.
2. 검토한 소스와 `package-lock.json`을 커밋하고 `main`에 push합니다.
3. Actions 실행 결과를 확인합니다.

워크플로는 [Astro 공식 GitHub Pages 안내](https://docs.astro.build/en/guides/deploy/github/)를 따릅니다.

배포 순서: `main`에 소스 업로드 → GitHub Actions에서 의존성 설치 → 타입 검사 및 정적 HTML 생성 → 생성된 `dist/`를 Pages에 게시합니다. `dist/`를 직접 커밋할 필요는 없습니다. 실행 결과는 저장소의 Actions 탭에서 확인합니다.

사이트(기본 한국어): https://seojmm.github.io/ · 영문: https://seojmm.github.io/en/

## 기존 작업 보존

변경 전 `README.md`, `package.json`, `package-lock.json`, `postcss.config.js`는 `.local-backup/pre-astro/`에 보관했습니다. 기존 `build/`는 유지했습니다. 기존 작업에서 삭제되어 있던 루트 `index.html`, `global.css`는 복원하지 않았습니다. 새 사이트 소스는 `src/`, 빌드 결과는 `dist/`에 위치합니다. 백업과 빌드 산출물은 Git에서 제외합니다.
