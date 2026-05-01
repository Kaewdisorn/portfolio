import type { Dictionary } from "@/types/locale";

const ko: Dictionary = {
  nav: {
    home: "홈",
    projects: "프로젝트",
    about: "소개",
    contact: "연락",
  },
  home: {
    eyebrow: "프로덕트 엔지니어 · 실시간 시스템",
    availableBadge: "새로운 기회에 열려 있습니다",
    headline: "제품 성능의 한계\n확장하는\n실시간 시스템",
    subheadline:
      "실시간 시스템과 분산 아키텍처를 설계하고 운영하며, 성능·확장성·안정성을 균형 있게 개선해 왔습니다.",
    cta: "프로젝트 보기",
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
      "회사 프로젝트와 개인 프로젝트를 함께 정리했습니다. 각 프로젝트는 시스템 설계, 운영 제약, 기술적 판단, 그리고 측정 가능한 성과를 중심으로 케이스 스터디 형태로 구성했습니다.",
    eyebrow: "프로젝트 & 케이스 스터디",
    readMore: "프로젝트 상세 보기",
    companyLabel: "회사",
    personalLabel: "개인",
    companySectionTitle: "회사 프로젝트",
    personalSectionTitle: "개인 프로젝트",
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
    repoLabel: "GitHub에서 보기",
  },
  about: {
    pageTitle: "소개",
    pageDescription: "실시간 시스템, 플랫폼 설계, 그리고 제가 문제를 푸는 방식",
    eyebrow: "About",
    intro:
      "실시간 데이터 파이프라인, 위치 기반 제품, 운영 플랫폼, 그리고 최근에는 AI 실행 인프라까지 설계하고 구현해 온 백엔드·플랫폼 엔지니어입니다. 작은 팀에서도 프론트엔드, 백엔드, 데이터베이스, 캐시, 프록시, CI/CD, 클라우드 운영을 함께 맞추며 실제로 운영되는 시스템을 끝까지 책임지는 역할을 해왔습니다.",
    summaryTitle: "어떤 문제를 풀어왔는가",
    summary: [
      "실시간 GPS 수집, WebSocket 기반 팬아웃, 지도 조회, 매칭, 내비게이션처럼 지연과 정합성이 함께 중요한 시스템을 설계하고 운영했습니다.",
      "React.js에서 Flutter Web으로의 마이그레이션, Node.js REST API 구조화, 데이터 흐름 정리처럼 운영 제품의 구조를 더 오래 버티는 형태로 다듬는 작업을 맡아왔습니다.",
      "개인 프로젝트에서는 일정 도메인 통합과 최근의 AI 실행 엔진 설계처럼, 복잡한 상호작용을 공통 도메인과 실행 구조로 정리하는 문제를 지속적으로 탐구하고 있습니다.",
    ],
    snapshotTitle: "요약",
    stats: [
      {
        value: "5+년",
        label: "프로덕션 엔지니어링 경험",
        detail:
          "실시간 시스템, 운영 플랫폼, 데이터·인프라 경계를 넘나드는 구현과 운영",
      },
      {
        value: "Backend → Infra",
        label: "엔드투엔드 오너십",
        detail:
          "API, 데이터 모델, Redis, PostgreSQL, 프록시, CI/CD, Azure 운영까지 직접 연결",
      },
      {
        value: "Real-time + AI",
        label: "집중 문제 영역",
        detail: "위치·스트리밍 시스템과 최근의 gRPC 기반 AI 실행 인프라 설계",
      },
    ],
    domainsTitle: "주요 경험 축",
    domains: [
      {
        title: "실시간 및 위치 기반 시스템",
        body: "GPS 수집, WebSocket 기반 모니터링, Redis 큐와 Pub/Sub, 지도 조회와 내비게이션처럼 응답성과 운영 안정성이 함께 중요한 경로를 설계해 왔습니다.",
      },
      {
        title: "운영 제품과 도메인 구조화",
        body: "ERP와 백오피스 성격의 제품에서 화면 구조, REST API 계약, 데이터 흐름을 다시 정리해 기능 확장성과 유지보수성을 높이는 작업을 해왔습니다.",
      },
      {
        title: "플랫폼 및 실행 인프라",
        body: "최근에는 NestJS gRPC, provider abstraction, structured validation, cost tracking, shared contracts를 중심으로 AI 실행 인프라를 설계하고 있습니다.",
      },
    ],
    experienceTitle: "프로젝트로 본 경험 흐름",
    experience: [
      {
        period: "2026.03 – 현재",
        title: "Nomi AI System",
        body: "메모리 기반 개인 비서와 특화 에이전트 워크포스를 위해 실행 엔진, 공통 protobuf 계약, 구조화 로깅, 비용 추적을 갖춘 AI 시스템 구조를 설계하고 있습니다.",
      },
      {
        period: "2025.11 – 2025.12",
        title: "CalBot",
        body: "웹 캘린더, REST API, Discord 봇이 하나의 일정 도메인을 공유하도록 설계한 개인 스케줄링 시스템을 만들었습니다.",
      },
      {
        period: "2024.01 – 2025.10",
        title: "실시간 모빌리티 트래킹 플랫폼",
        body: "1초 단위 GPS 수집, Redis 기반 큐/팬아웃, Flutter Web 모니터링, 리포트 다운로드까지 포함한 실시간 차량 관제 플랫폼을 구축하고 운영했습니다.",
      },
      {
        period: "2022.06 – 2023.12",
        title: "지도 기반 멤버 관리 및 매칭 / 내비게이션 시스템",
        body: "세 개의 유사 프로젝트를 공통 아키텍처로 통합해 위치 조회, 매칭, 내비게이션, 통계 기능을 하나의 운영 기반 위에 정리했습니다.",
      },
      {
        period: "2022.01 – 2022.05",
        title: "법인택시회사 전사관리 플랫폼 (ERP)",
        body: "React.js 기반 운영 화면을 Flutter Web으로 마이그레이션하고, Node.js REST API와 기사·차량·정산 로직을 구조적으로 재정비했습니다.",
      },
    ],
    principlesTitle: "일하는 방식",
    principles: [
      {
        title: "운영되는 구조를 먼저 봅니다",
        body: "배포보다 운영이 길기 때문에 장애 경계, 관측 가능성, 배포 절차, 변경 영향 범위를 초기 설계부터 함께 봅니다.",
      },
      {
        title: "복잡성은 책임 분리로 제어합니다",
        body: "실시간 수집, 저장, 팬아웃, ETA, 리포트, AI 실행 같은 서로 다른 부하는 분리하고 각 경계의 계약을 명확히 합니다.",
      },
      {
        title: "측정 가능한 개선을 선호합니다",
        body: "압축, 직렬화, 캐싱, 데이터 흐름 최적화는 감이 아니라 전송량, 지연, 운영 비용 같은 명확한 효과로 판단합니다.",
      },
      {
        title: "작은 팀에서도 시스템 경계를 유지합니다",
        body: "팀 규모가 작을수록 모든 것을 한곳에 몰아넣기 쉽지만, 장기적으로는 역할과 계약을 분명히 나누는 편이 더 빠르게 갑니다.",
      },
    ],
    ctaTitle: "더 자세한 구현은 프로젝트에서",
    ctaBody:
      "프로젝트 페이지에는 각 시스템의 문제, 아키텍처, 핵심 결정, 도전과 해결, 그리고 성과를 케이스 스터디 형태로 정리했습니다.",
    primaryCta: "프로젝트 보기",
    secondaryCta: "연락하기",
  },
  contactPage: {
    pageTitle: "연락",
    pageDescription: "GitHub과 이메일로 연락할 수 있는 페이지입니다.",
    eyebrow: "Contact",
    intro:
      "현재는 GitHub과 이메일 두 채널만 열어두었습니다. 프로젝트, 협업, 기술적인 이야기 모두 편하게 보내주시면 확인 후 답변드리겠습니다.",
    channelsTitle: "연락 채널",
    github: {
      title: "GitHub",
      description:
        "개인 프로젝트와 공개 저장소를 가장 먼저 확인할 수 있는 채널입니다.",
      actionLabel: "GitHub 열기",
    },
    email: {
      title: "Email",
      description:
        "협업 제안이나 자세한 이야기처럼 조금 더 직접적인 연락은 이메일이 가장 빠릅니다.",
      actionLabel: "이메일 보내기",
    },
    noteTitle: "추가 채널은 이후 확장 예정",
    noteBody:
      "필요에 따라 다른 연락 채널도 나중에 추가할 수 있도록 페이지 구조를 단순하게 유지했습니다.",
  },
  footer: {
    copyright: "© 2025. All rights reserved.",
    sourceCode: "소스 코드",
  },
  notFound: "페이지를 찾을 수 없습니다.",
};

export default ko;
