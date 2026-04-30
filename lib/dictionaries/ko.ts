import type { Dictionary } from "@/types/locale";

const ko: Dictionary = {
  nav: {
    home: "홈",
    projects: "프로젝트",
    about: "소개",
  },
  home: {
    headline: "백엔드 시스템을 설계하고\n운영합니다",
    subheadline:
      "실시간 시스템, 분산 아키텍처, 인프라 성능 최적화 전문 백엔드 엔지니어입니다.",
    cta: "프로젝트 보기",
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
      "5년 이상 실시간 시스템, 분산 아키텍처, 인프라 성능 최적화에 집중해 온 백엔드 엔지니어입니다. 단순히 동작하는 코드를 넘어, 운영 환경에서 지속적으로 신뢰할 수 있는 시스템을 설계하는 데 관심이 있습니다.",
    focusTitle: "기술 집중 분야",
    focus: [
      "실시간 데이터 파이프라인 및 이벤트 스트리밍",
      "고가용성 분산 시스템 설계",
      "데이터베이스 성능 최적화 및 쿼리 튜닝",
      "쿠버네티스 기반 컨테이너 인프라 운영",
      "시스템 관찰 가능성 및 SLO 설계",
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
