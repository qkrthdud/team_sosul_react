import React, { useRef, useEffect, useState } from 'react';

import { supabase } from '../lib/supabaseClien';
import type { Campaign_features } from '../types/common';


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules'; // Autoplay 추가 가능성

// Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/autoplay'; // Autoplay 사용 시





const HotspotSection: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  const [hotspotSlidesData, setHotspot] = useState<Campaign_features[]>([]);
  const [loding, setLoding] = useState<boolean>(true);


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
     const fetchHot = async () => {
                try {
                    const { data, error } = await supabase
                        .from('campaign_features')
                        .select('*')
                        .order('id', { ascending: true });
    
                    if (error) {
                        throw error;
                    }
    
                    setHotspot(data || []);
                } catch (error) {
                    console.error('Error fetching categories:', error);
                } finally {
                    setLoding(false);
                    console.log('Hotspot data loaded:', hotspotSlidesData);
                }
            };
    
      fetchHot();

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
          {
            loding ? "로딩중입니다." : <Swiper
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
            breakpoints={{ // 반응형 설정
              320: {
                slidesPerView: 1.5,
                spaceBetween: 15,
                centeredSlides: true, 
              },
              // 640px 이상일 때 (sm)
              640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
                centeredSlides: true,
              },
              // 768px 이상일 때 (md)
              768: {
                slidesPerView: 3.5,
                spaceBetween: 20,
                centeredSlides: true, 
              },
              // 1024px 이상일 때 (lg)
              1024: {
                slidesPerView: 4.5, // 한 번에 보여줄 슬라이드 수
                spaceBetween: 30,
                centeredSlides: true,
              },
               // 1280px 이상일 때 (xl)
               1280: {
                  slidesPerView: 5, // 한 번에 보여줄 슬라이드 수 (HTML에 5개 아이템 기준)
                  spaceBetween: 30,
                  centeredSlides: true,
                },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="conSwiper1"
          >
            {
            hotspotSlidesData && 
            hotspotSlidesData.map((slide) => (
              <SwiperSlide key={slide.id} className="hotplace_card_box relative rounded-lg overflow-hidden group " style={{ width: '280px' }}> {/* 카드 스타일링 */}
                <img
                  src={slide.img_src}
                  alt={slide.alt_text || slide.title }
                  className="w-full h-[330px] object-cover transition-transform duration-300 group-hover:scale-105" // 이미지 스타일
                />
                <div className="hotplace_txt absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 text-white"> {/* 텍스트 오버레이 */}
                  <div
                    className="sub_tit text-2xl font-semibold mb-1" // white 클래스는 text-white로 대체
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <div
                    className="basic_txt text-base"
                    dangerouslySetInnerHTML={{ __html: slide.description  as string }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          }
          

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