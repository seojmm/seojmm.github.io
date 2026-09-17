# 서지명, Jimyeung Seo

HTML, CSS, JavaScript만으로 만든 개인 CV 웹사이트입니다. Node.js, npm 설치나 빌드 없이 사용할 수 있습니다.

- 한국어(기본): https://seojmm.github.io/
- English: https://seojmm.github.io/en/
- 한국어 기본, `KO / EN` 순서, Pretendard, 저채도 빨간색의 한 열 CV 레이아웃을 사용합니다.

## 파일 구성

```text
index.html               한국어 CV: 직접 수정하는 원본
en/index.html           English CV: 직접 수정하는 원본
ko/index.html           기존 /ko/ 주소를 한국어 페이지로 연결
style.css                색상, 글꼴, 여백, 모바일 및 인쇄 스타일
script.js                언어 전환 시 스크롤 위치 유지, 연도 갱신
assets/favicon.svg       사이트 아이콘
assets/fonts/            Pretendard 웹폰트와 라이선스
.nojekyll                GitHub Pages에서 파일을 그대로 제공하도록 설정
```

## 내용 수정

한국어는 `index.html`, 영어는 `en/index.html`에서 바로 수정합니다. 두 파일은 완전한 HTML 문서이므로 JavaScript가 꺼져 있어도 본문과 언어 링크가 작동합니다.

HTML 안의 주석과 아래 `id`를 검색하면 각 영역을 찾을 수 있습니다.

| 영역 | 검색할 id | 항목 추가 방법 |
| --- | --- | --- |
| 프로필, 소개, 연락처 | `about` | 이름, 소속, 소개 문단, 링크 수정 |
| 연구 관심사 | `research` | 목록의 `<li>` 복사 |
| 학력 | `experience` | `timeline` 안의 `<li>` 복사 |
| 논문 | `publications` | 해당 연도의 `publication-list` 안의 `<li>` 복사 |
| 특허 출원 | `patents` | `patent-list` 안의 `<li>` 복사 |
| 프로젝트 | `projects` | `<article class="project-entry">` 복사 |
| 수상, 장학 | `awards` | `timeline` 안의 `<li>` 복사 |
| 기술, 언어 | `skills` | `<dt>`와 `<dd>` 수정 |

항목을 추가하거나 날짜를 바꾸면 한국어, 영어 파일을 함께 수정하세요. 논문 제목과 저자명은 두 언어에서 동일하게 유지하며 본인 이름은 `<strong>Jimyeung Seo</strong>`로 강조합니다. 일반 문장에 `&`, `<`, `>`를 넣을 때는 각각 `&amp;`, `&lt;`, `&gt;`로 적으세요.

프로필 사진은 `assets/jimyeung-seo.jpg`이며 소개 오른쪽에 원본 비율로 표시합니다. 사진을 교체할 때는 이 파일을 바꾸고, 이미지 크기가 달라지면 두 HTML의 `width`와 `height`도 원본 크기에 맞추세요. 영문 페이지의 파일 경로는 `../assets/`로 시작합니다. PDF를 추가할 때도 `assets/`에 넣고 링크 목록에 연결하면 됩니다.

## 로컬에서 보기

`index.html`을 브라우저로 열면 됩니다. 상대 경로를 사용하므로 폰트, CSS, 언어 전환도 로컬 파일에서 동작합니다.

HTTP 주소로 확인하고 싶다면 프로젝트 폴더에서 다음 명령을 실행합니다. 필수 과정은 아닙니다.

```bash
python3 -m http.server 4321 --bind 127.0.0.1
```

그런 다음 http://127.0.0.1:4321/ 을 엽니다.

## GitHub Pages 배포

저장소의 **Settings → Pages → Source: Deploy from a branch → main / (root)**를 사용합니다. 수정한 파일을 커밋하고 `main`에 push하면 GitHub Pages가 파일을 그대로 게시합니다. 별도의 Astro 빌드나 사용자 정의 배포 워크플로는 없습니다.

```bash
git add index.html en/index.html style.css script.js assets
git commit -m "Update CV"
git push origin main
```

기존 화면이 남아 있으면 강력 새로고침(⌘⇧R / Ctrl+Shift+R)하거나 `?v=새버전`을 주소 뒤에 붙여 확인하세요. CSS, JS를 수정할 때 HTML의 `style.css?v=...`, `script.js?v=...` 버전 문자열도 두 언어에서 함께 갱신할 수 있습니다.

## 콘텐츠 출처와 폰트

제공받은 CV를 기준으로 학력 2건, 논문 5편, 특허 출원 1건, 프로젝트 4건, 수상, 장학 5건과 기술, 언어를 반영했습니다. 본인 영문 이름은 요청에 따라 **Jimyeung Seo**로 통일했습니다. 학위 과정, 프로젝트의 ‘현재’ 표시는 CV 기준이므로 변화가 있으면 갱신하세요.

논문, 특허, 프로젝트 URL은 원문에 없어 추가하지 않았습니다. 국문 특허명, 프로젝트명은 CV 영문 제목의 번역입니다. 원본 CV 파일과 개인 전화번호는 배포에 포함하지 않습니다.

[Pretendard Variable 1.3.9](https://github.com/orioncactus/pretendard/tree/v1.3.9)를 직접 제공합니다. 저작권 고지와 SIL Open Font License는 `assets/fonts/OFL-Pretendard.txt`에 있습니다.

단순 HTML 파일 구성과 세로형 연구자 페이지는 [Byungkook Oh 교수님 홈페이지 저장소](https://github.com/bkoh509/bkoh509.github.io)를 참고했습니다. 현재 사이트의 콘텐츠와 스타일은 이 프로젝트에서 작성했으며 교수님 개인 자료는 복사하지 않았습니다.

이전 Astro 소스와 React 산출물은 Git 이력 및 로컬 `.local-backup/pre-plain-html/`에 보존되어 있습니다. 백업은 GitHub에 올리지 않습니다.

## 수상 항목의 표기 근거

수상 및 장학금의 네 항목은 사용자가 제공한 `LIG D&A 이력서.pdf` 5쪽의 명칭, 수상일, 기관을 기준으로 수정했습니다.

- 2026년 AI서울테크연구지원사업(석사) 장학생 선정: 2026.06.05, 서울미래인재재단
- 카카오X한국정보과학회 AI 에이전트 경진대회 우수상: 2025.12.17, (주)카카오 및 한국정보과학회
- 2025-2학기 대학원 KU우수연구장학생 선정: 2025.12.17, 건국대학교
- 제1회 건국대학교 해커톤 우수상: 2023.08.17, 과학기술정보통신부 및 정보통신기획평가원, 건국대학교

Dean’s List는 위 PDF에 없으므로 기존에 제공된 CV의 2025년 기록을 유지했습니다. 국문에 추가했던 ‘학업 우수’라는 해석은 제거했습니다. 영문 페이지의 설명 번역은 공식 영문 명칭으로 확인한 것이 아니며, 장학사업의 고유 명칭은 한국어로 보존합니다. 원본 이력서 PDF는 사이트에 포함하지 않습니다.
