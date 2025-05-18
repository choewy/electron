import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const exampleTitles = [
  {
    id: 1,
    title: '공원 의자 테라스 나무 정원 우드 조경',
    mainKeyword: '공원 의자',
    subKeywords: ['테라스', '나무', '정원', '우드', '조경'],
  },
  {
    id: 2,
    title: '손톱깎이 스테인리스 네일케어 휴대용 매니큐어',
    mainKeyword: '손톱깎이',
    subKeywords: ['스테인리스', '네일케어', '휴대용', '매니큐어'],
  },
  {
    id: 3,
    title: '커피머신 자동 홈카페 원두 가정용 에스프레소',
    mainKeyword: '커피머신',
    subKeywords: ['자동', '홈카페', '원두', '가정용', '에스프레소'],
  },
  {
    id: 4,
    title: '블루투스 이어폰 무선 노이즈캔슬링 통화 고음질',
    mainKeyword: '블루투스 이어폰',
    subKeywords: ['무선', '노이즈캔슬링', '통화', '고음질'],
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 히어로 섹션 */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-accent opacity-40 z-0"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center px-4 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            네이버 쇼핑 상품제목 생성
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            AI가 분석한 키워드로 매력적인 상품 제목을 자동으로 생성하세요. 경쟁상품을 크롤링하여 최적의 키워드 조합을 찾아드립니다.
          </p>
          <Link to="/generator">
            <motion.button className="btn-primary text-lg py-3 px-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              상품제목 생성하기
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>
      {/* 예시 섹션 */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">생성 예시</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exampleTitles.map((item) => (
                <motion.div
                  key={item.id}
                  className="card bg-secondary/80 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <span className="bg-accent/20 text-accent px-2 py-1 rounded text-sm mr-2">메인키워드</span>
                      <span>{item.mainKeyword}</span>
                    </div>
                    <div className="flex flex-wrap">
                      <span className="bg-secondary/50 text-gray-300 px-2 py-1 rounded text-sm mr-2 mb-2">서브키워드</span>
                      {item.subKeywords.map((keyword, idx) => (
                        <span key={idx} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-sm mr-2 mb-2">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* 특징 섹션 */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">주요 특징</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div className="text-center" whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
                <div className="bg-accent/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">메인키워드 추출</h3>
                <p className="text-gray-400">상품의 핵심 메인키워드를 자동으로 추출하여 상위 노출 가능성을 높입니다.</p>
              </motion.div>

              <motion.div className="text-center" whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
                <div className="bg-accent/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">실시간 크롤링</h3>
                <p className="text-gray-400">네이버 쇼핑 데이터를 실시간으로 분석하여 트렌디한 키워드를 수집합니다.</p>
              </motion.div>

              <motion.div className="text-center" whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
                <div className="bg-accent/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">최적화 알고리즘</h3>
                <p className="text-gray-400">서브키워드 조합을 최적화하여 검색노출과 전환율이 높은 제목을 제안합니다.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA 섹션 */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-accent to-purple-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">지금 바로 시작하세요</h2>
            <p className="text-xl mb-8">더 많은 클릭과 구매를 이끌어내는 상품제목을 생성해보세요.</p>
            <Link to="/generator">
              <motion.button
                className="bg-white text-accent font-bold py-3 px-8 rounded-lg text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                무료로 시작하기
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
