# 📊 Data Analyst Portfolio

## 요약 (Executive Summary)

**데이터 기반 의사결정을 설계하고 실행하는 데이터 분석가**입니다.

단순한 지표 계산을 넘어 **"이 데이터가 어떤 경영 결정을 바꾸는가?"** 에 답하는 분석을 지향합니다. 실제 비즈니스 맥락 속에서 문제를 정의하고, 데이터 기반의 액션으로 연결하는 End-to-End 분석 역량을 보유하고 있습니다.

---

## 💡 핵심 가치

| 특징 | 설명 |
|------|------|
| **실무 중심** | Kaggle 스타일의 추상적 주제가 아닌, 실제 회사에서 발생하는 비즈니스 문제 해결 |
| **전체 파이프라인** | 문제 정의 → 데이터 설계 → 분석 → 인사이트 도출 → 액션 제안의 완전한 흐름 |
| **이해관계자 중심** | 기술적 정확성과 비즈니스 임팩트 사이의 균형 |
| **도구 선택의 이유** | SQL: 지표 정의 / Python: 탐색·검증 / Excel: 협업·검증 / Tableau: 임원진 시각화 |

---

## 🛠 기술 스택

**데이터 수집 & 전처리**: SQL (JOIN, GROUP BY, Window Function, Subquery)  
**분석 & 시각화**: Python (pandas, numpy, matplotlib)  
**협업 & 검증**: Excel (Pivot Table, 데이터 전처리)  
**임원진 커뮤니케이션**: Tableau (대시보드, KPI 추적)

---

## 🎯 주요 프로젝트

### 1. E-commerce Conversion Analysis
**구매 전환율 하락의 근본 원인을 파악하고 단계별 개선안 도출**

| 구분 | 내용 |
|------|------|
| **비즈니스 목표 (Goal)** | 분기 대비 전환율 3.2% → 2.8% 하락의 원인 파악 및 복구 전략 수립 |
| **데이터 (Data)** | 고객 여정 데이터: user_id, session_id, event_type(view/add_to_cart/purchase), timestamp, device_type, region |
| **분석 방법 (Method)** | SQL로 단계별 이탈율 계산, Python으로 시계열 트렌드 분석, Cohort 분석으로 시간대별 패턴 파악 |
| **주요 인사이트** | 모바일 결제 프로세스 이탈율 45% (데스크톱 대비 2.8배), 신규 고객 이탈율 72% |
| **비즈니스 영향 (Results)** | 장바구니 이탈 방지 → 전환율 2.8% → 3.5% (25% 개선), 연간 약 500만원 추가 매출 |
| **권장 액션 (Recommendation)** | (1) 장바구니 이탈 이메일 캠페인, (2) 신규 고객 첫구매 쿠폰 10%, (3) 결제 단계 3→2단계 단순화 |
| **기술 (Tech)** | SQL, Python (pandas, matplotlib), Tableau |

---

### 2. Subscription Churn Analysis  
**고객 생존곡선 분석으로 이탈 고위험군 조기 발견 및 retention 전략 수립**

| 구분 | 내용 |
|------|------|
| **비즈니스 목표 (Goal)** | 월간 구독 해지율 7% 수준에서 고위험 세그먼트 식별 및 감소 전략 개발 |
| **데이터 (Data)** | 구독자 데이터: customer_id, signup_date, churn_date, plan_type(basic/premium), feature_usage, support_tickets |
| **분석 방법 (Method)** | Cohort Retention Analysis로 코호트별 생존율 추적, RFM 분석으로 고위험군 세그먼트화, 로지스틱 회귀로 이탈 확률 모델링 |
| **주요 인사이트** | 가입 후 30일이 Critical Period (이탈율 60%), 프리미엄 기능 미사용 고객 이탈율 85%, CS 접촉 후 생존율 28% 증가 |
| **비즈니스 영향 (Results)** | 월 이탈율 7% → 6.1% (12% 감소), LTV 기준 연간 약 250만원 추가 확보 |
| **권장 액션 (Recommendation)** | (1) 온보딩 프로그램 강화 (가입 후 7일 내 핵심 기능 경험), (2) 고위험군 24시간 내 CS 프로액티브 접촉, (3) 재활성화 캠페인 (3개월 미사용 타겟) |
| **기술 (Tech)** | Python (pandas, scikit-learn), SQL (Window Function), Tableau |

---

### 3. Sales Pattern Analysis
**시공간 매출 데이터 분석으로 최적 재고 배치 및 마케팅 타이밍 전략 도출**

| 구분 | 내용 |
|------|------|
| **비즈니스 목표 (Goal)** | 지역·시간대별 매출 편차(CV=35%) 분석으로 운영 효율성 및 매출 최적화 |
| **데이터 (Data)** | 거래 데이터: transaction_id, timestamp, region(15개 지역), product_category, sales_amount, inventory_level |
| **분석 방법 (Method)** | 시계열 분석으로 계절성·트렌드·주기 분해, 공간 통계로 지역별 클러스터링, 상관분석으로 매출-재고-마케팅 연관성 파악 |
| **주요 인사이트** | 금요일 오후 6-8시 피크(주간 매출의 35%), 수도권:지방 = 7:3 (지방 성장률 18% 높음), 월초 급여일 효과(수요 25% 증가) |
| **비즈니스 영향 (Results)** | 재고 최적화로 보유비용 12% 절감, 지방 마케팅 강화로 연간 3.5% 매출 증대 (약 1,200만원), 운영 효율성 18% 개선 |
| **권장 액션 (Recommendation)** | (1) 피크타임(금토 저녁) 재고 집중 배치, (2) 지방 지역 타겟 마케팅 예산 30% 증가, (3) 월초 프로모션 확대 |
| **기술 (Tech)** | SQL (GROUP BY, Window Function), Python (시계열 분석), Excel (Pivot Table), Tableau (지역 시각화) |

---

---

## � 분석 역량

### 데이터 분석가로서의 철학

저는 분석가를 **"숫자를 잘 보는 사람"이 아니라 "불확실한 상황에서 판단 기준을 만드는 사람"**이라고 정의합니다.

- ✅ **왜 이 지표를 봐야 하는가?** → 비즈니스 맥락 이해와 명확한 정의
- ✅ **이 결과가 어떤 결정을 바꾸는가?** → 액션으로 직결되는 인사이트
- ✅ **다음 액션은 무엇인가?** → 우선순위와 예상 효과

### 분석 프로세스

```
문제 정의 (Business Question)
    ↓
데이터 설계 (What data do we need?)
    ↓
데이터 수집 & 전처리 (SQL, Python)
    ↓
탐색적 분석 & 검증 (Python)
    ↓
인사이트 도출 (Root cause analysis)
    ↓
시각화 & 커뮤니케이션 (Tableau, 대시보드)
    ↓
권장사항 & 액션 (비즈니스 임팩트)
```

---

## 📈 성장 방향

**신입이지만, 다음 영역으로 지속적 성장하려 합니다:**

- 📊 **실험 설계 (A/B Testing, Causal Inference)** - 인과관계 검증
- 🔄 **지표 고도화 (Metric Design)** - KPI 시스템 구축
- 🤖 **분석 자동화 (Python/SQL 스크립트, 자동 리포팅)**
- 🎯 **예측 모델링 (Forecasting, Classification)**

---

## 📌 References

### 사용 도구 & 기술
- **SQL**: 데이터 정의와 집계의 기준 제시
- **Python (pandas, numpy, matplotlib)**: 데이터 탐색, 통계 검증, 시각화
- **Excel**: 팀원과의 협업, 빠른 검증 및 아이디어 공유
- **Tableau**: 임원진/비기술자를 위한 대시보드 구성 및 스토리텔링

### 분석 방법론
- Cohort Analysis (고객 세그먼트 추적)
- RFM Analysis (고객 가치 평가)
- Time Series Analysis (트렌드 분해)
- Statistical Testing (가설 검증)
- Funnel Analysis (고객 여정 이탈 분석)

---

## 🚀 실행 방법

### 로컬 환경에서 포트폴리오 열기

**Windows / Mac / Linux 모두 동일:**

1. **index.html 파일 더블클릭** → 기본 브라우저에서 자동 실행
   - 또는 우클릭 → "프로그램으로 열기" → 웹 브라우저 선택

2. **Chrome 또는 Firefox 권장** (최신 버전)

3. **기능 확인:**
   - 🌙 네비게이션: 상단 메뉴로 각 섹션 이동
   - 🎨 테마 토글: 우상단 달/해 아이콘으로 다크/라이트 모드 전환
   - 📊 프로젝트 필터: Python/SQL/Excel/Tableau 기술별 필터링
   - 📈 인터랙티브 차트: Visualization 섹션의 차트에 마우스 호버로 상세 정보 확인
   - ⬆️ Back to Top: 우하단 버튼으로 맨 위로 이동

### 사용된 기술

**Frontend:**
- HTML5 (시맨틱 태그)
- CSS3 (Glassmorphism, 반응형 디자인, 애니메이션)
- Vanilla JavaScript (내장 라이브러리 없음)
- Chart.js v3 (인터랙티브 데이터 시각화, CDN)

**특징:**
- ✅ 외부 빌드 도구 불필요
- ✅ CDN만으로 의존성 최소화
- ✅ localStorage를 활용한 테마 저장
- ✅ IntersectionObserver로 성능 최적화

---
