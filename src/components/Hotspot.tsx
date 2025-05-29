import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules'; // Autoplay 추가 가능성

// Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/autoplay'; // Autoplay 사용 시

// 슬라이드 데이터 타입 정의
interface HotspotSlideData {
  id: number;
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

// 샘플 데이터 (이미지는 5개 종류가 반복되는 것으로 보입니다)
const hotspotSlidesData: HotspotSlideData[] = [
  {
    id: 1,
    imgSrc: '//item-team-sosul.vercel.app/img/image/hotplace_1.jpg',
    altText: '인기스팟이미지1',
    title: '소슬의 인기스팟을<br>안내해드립니다.',
    description: '놓치면 아쉬운 점!',
  },
  {
    id: 2,
    imgSrc: '//item-team-sosul.vercel.app/img/image/hotplace_2.jpg',
    altText: '인기스팟이미지2',
    title: '소슬 포인트 <br>확인해보세요.',
    description: '이것이 소슬 포인트!',
  },
  {
    id: 3,
    imgSrc: '//item-team-sosul.vercel.app/img/image/hotplace_3.jpg',
    altText: '인기스팟이미지3',
    title: '소슬의 인기스팟을<br>안내해드립니다.',
    description: '놓치면 아쉬운 점!',
  },
  {
    id: 4,
    imgSrc: '//item-team-sosul.vercel.app/img/image/hotplace_4.jpg',
    altText: '인기스팟이미지4',
    title: '소슬 포인트 <br>확인해보세요.',
    description: '이것이 소슬 포인트!',
  },
  {
    id: 5,
    imgSrc: '//item-team-sosul.vercel.app/img/image/hotplace_5.jpg',
    altText: '인기스팟이미지5',
    title: '소슬의 인기스팟을<br>안내해드립니다.',
    description: '놓치면 아쉬운 점!',
  },  
  {
    id: 6,
    imgSrc: '//item-team-sosul.vercel.app/img/image/hotplace_5.jpg',
    altText: '인기스팟이미지5',
    title: '소슬의 인기스팟을<br>안내해드립니다.',
    description: '놓치면 아쉬운 점!',
  },
  // 필요하다면 10개까지 데이터를 채우거나, loop를 true로 설정하여 5개로 반복시킬 수 있습니다.
  // HTML에는 10개의 슬라이드 + 중복 슬라이드가 있었으므로, 여기서는 5개만 정의하고 loop를 사용하겠습니다.
];


const HotspotSection: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (swiperRef.current && !swiperRef.current.destroyed) {
        const swiperInstance = swiperRef.current;
        if (swiperInstance.params.navigation && typeof swiperInstance.params.navigation !== 'boolean') {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.destroy();
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }
  }, []); // 의존성 배열은 초기 마운트 시에만 실행되도록 비워둡니다.

  return (
    <div className="hotspot py-16 md:py-24"> {/* p100 -> py-16/py-24 (Tailwind) */}
      <div className="container mx-auto px-4 text-center md:text-left"> {/* container는 중앙 정렬 및 패딩 */}
        <div className="point_txt text-green-600 font-semibold mb-2 lg:hidden">BEST SPOT</div> {/* organic -> text-green-600, d-lg-none -> lg:hidden */}
        <div className="main_tit text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          요즘 주목받는
          <br className="lg:hidden" /> 베스트스팟 {/* d-lg-none -> lg:hidden */}
        </div>

        <section className="relative"> {/* Swiper와 버튼을 포함할 부모에 relative 추가 */}
          <Swiper
            modules={[Navigation, Autoplay]} // Autoplay는 선택 사항
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            loop={true} // HTML에 duplicate 슬라이드가 많으므로 loop 사용
            slidesPerView={'auto'} // 카드 크기에 따라 자동으로 조절되도록
            spaceBetween={20} // 카드 사이 간격 (조절 가능)
            centeredSlides={true} 
            autoplay={{ // 자동 넘김 옵션 (선택 사항)
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="conSwiper1"
          >
            {
            hotspotSlidesData.map((slide) => (
              <SwiperSlide key={slide.id} className="hotplace_card_box relative rounded-lg overflow-hidden group " style={{ width: '280px' }}> {/* 카드 스타일링 */}
                <img
                  src={slide.imgSrc}
                  alt={slide.altText}
                  className="w-full h-[330px] object-cover transition-transform duration-300 group-hover:scale-105" // 이미지 스타일
                />
                <div className="hotplace_txt absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 text-white"> {/* 텍스트 오버레이 */}
                  <div
                    className="sub_tit text-2xl font-semibold mb-1" // white 클래스는 text-white로 대체
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <div
                    className="basic_txt text-base"
                    dangerouslySetInnerHTML={{ __html: slide.description }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 네비게이션 버튼 */}
          <div className="hotspot_btns absolute top-3/4 w-full flex justify-between px-4 z-10 pointer-events-none">
            {/* pointer-events-none을 부모에 주고, 버튼 자체에는 pointer-events-auto를 줘서 버튼만 클릭되도록 */}
            <div
              ref={prevRef}
              className="hotspot-button-prev cursor-pointer w-12 h-12 bg-white/70 hover:bg-white rounded-full flex items-center justify-center shadow-md pointer-events-auto"
              role="button"
              aria-label="Previous slide"
            >
              {/* SVG 아이콘 (Heroicons 예시) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div
              ref={nextRef}
              className="hotspot-button-next cursor-pointer w-12 h-12 bg-white/70 hover:bg-white rounded-full flex items-center justify-center shadow-md pointer-events-auto"
              role="button"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HotspotSection;