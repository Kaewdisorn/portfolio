import type { Dictionary } from "@/types/locale";

const ko: Dictionary = {
  nav: {
    home: "홈",
    projects: "프로젝트",
    about: "소개",
  },
  home: {
    eyebrow: "프로덕트 엔지니어 · 실시간 시스템",
    availableBadge: "새로운 기회에 열려 있습니다",
    headline: "제품 성능의 한계를\n확장하는\n실시간 시스템",
    subheadline:
      "실시간 시스템과 분산 아키텍처를 설계하고 운영하며, 성능·확장성·안정성을 균형 있게 개선해 왔습니다.",
    cta: "프로젝트 사례 보기",
    ctaSecondary: "연락하기",
    featuredTitle: "주요 프로젝트",
    skillsTitle: "기술 역량",
    contactTitle: "연락하기",
    contactBody:
      "새로운 기회나 기술적인 논의를 환영합니다. 편하게 연락해 주세요.",
  },
  projects: {
    pageTitle: "프로젝트",
    pageDescription:
      "설계 결정, 트레이드오프, 그리고 측정 가능한 성과를 중심으로 정리한 기술 케이스 스터디입니다.",
  },
  project: {
    overviewHeading: "개요",
    problemHeading: "문제",
    roleHeading: "역할",
    architectureHeading: "아키텍처",
    decisionsHeading: "핵심 결정",
    challengesHeading: "도전과 해결",
    impactHeading: "성과",
    breadcrumbProjects: "프로젝트",
  },
  about: {
    pageTitle: "소개",
    pageDescription: "엔지니어링 철학과 기술적 관심사",
    intro:
      "실시간 시스템, 분산 아키텍처, 인프라 성능 최적화에 5년 이상 집중해 온 시니어 백엔드·플랫폼 엔지니어입니다. GCP, Azure, 온프레미스 환경에서 백엔드, 인프라, 데이터 레이어 전반의 엔드투엔드 오너십을 가지고 프로덕션 시스템을 설계하고 운영했습니다.",
    focusTitle: "기술 집중 분야",
    focus: [
      "실시간 GPS 및 WebSocket 기반 데이터 스트리밍 파이프라인",
      "고가용성 분산 서비스 아키텍처",
      "PostgreSQL(PostGIS) 기반 지리공간 데이터 처리",
      "Docker 컨테이너화 및 멀티클라우드 CI/CD 자동화",
      "직렬화, 압축, 캐싱을 통한 성능 최적화",
    ],
    valuesTitle: "엔지니어링 철학",
    values: [
      "단순성 우선: 복잡성은 명확한 이유가 있을 때만 도입합니다.",
      "측정 기반 의사결정: 성능 개선은 프로파일링 데이터로 시작합니다.",
      "운영 관점 설계: 시스템을 만들 때 운영 부담도 함께 고려합니다.",
      "트레이드오프 명확화: 모든 설계 결정에는 선택하지 않은 대안이 있습니다.",
    ],
  },
  footer: {
    copyright: "© 2025. All rights reserved.",
    sourceCode: "소스 코드",
  },
  notFound: "페이지를 찾을 수 없습니다.",
};

export default ko;
