import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Navigation 모듈은 여전히 필요합니다.
import { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation"; // 이 CSS는 커스텀 버튼에도 영향을 줄 수 있으므로, 필요 없다면 제거 가능
import "swiper/css/pagination";
import '../scss/soyoung.scss';
import Title from "./Title";

// InstagramEmbed 컴포넌트 및 관련 타입 정의 (이전과 동일)
declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

const InstagramEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const loadInstagramScript = () => {
      if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
          window.instgrm?.Embeds?.process();
        };
      } else {
        window.instgrm?.Embeds?.process();
      }
    };
    loadInstagramScript();
  }, [url]);

  return (
    <blockquote
      className="instagram-media rounded-md border border-gray-300 shadow-md w-full bg-white"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ margin: '0 auto', padding: 0, minWidth: '280px', maxWidth: '100%', boxSizing: 'border-box' }}
    />
  );
};


function SwiperThumbInstagram() {
  const postUrls = [
    'https://www.instagram.com/p/DKLnORNpL80/',
    'https://www.instagram.com/p/DKLjbFvBmFp/',
    'https://www.instagram.com/p/DIOCYNGpuCv/',
    'https://www.instagram.com/p/DIu9HIYBLUo/',
    'https://www.instagram.com/p/DIOCsg-pwQj/',
  ];

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="main_con main_con_four p100">
      <div className="container">
          <Title dataobj={{
            tit:"소슬의 캠핑 이야기",
            btnshow: false,
            txtalign : "center"
          }}>
          </Title>

        <div className="slider">
          <div className="inner h-[29rem] ">
            <Swiper
              modules={[Navigation, Pagination]} // Navigation 모듈은 포함
              loop={true} 
              pagination={{
                el: ".same-pagination",
                clickable: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 25 },
                1440: { slidesPerView: 4, spaceBetween: 30 },
              }}
              onInit={(swiper) => {
                // swiper.params.navigation 객체가 boolean (false)가 아닌지 확인하고 설정
                if (typeof swiper.params.navigation !== 'boolean') {
                  // navigation 객체가 없을 수도 있으니 안전하게 할당
                  swiper.params.navigation = swiper.params.navigation || {};
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
                // 네비게이션 모듈을 우리 ref로 초기화하고 상태 업데이트
                swiper.navigation.init();
                swiper.navigation.update();

                // Instagram Embeds 처리
                setTimeout(() => {
                  if (window.instgrm && window.instgrm.Embeds) {
                    window.instgrm.Embeds.process();
                  }
                }, 150);
              }}
              onSlideChangeTransitionEnd={() => {
                if (window.instgrm && window.instgrm.Embeds) {
                  window.instgrm.Embeds.process();
                }
              }}
            >
              {postUrls.map((url, i) => (
                <SwiperSlide key={url || i} style={{ overflow: 'hidden'}}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                    <InstagramEmbed url={url} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mobile">
            <div className="swiper-pagination same-pagination"></div>
          </div>

          {/* 우리의 커스텀 버튼 */}
          <button
            ref={prevRef}
            className="btn btn_prev same-button-prev"
            aria-label="Previous Slide"
          ></button>
          <button
            ref={nextRef}
            className="btn btn_next same-button-next"
            aria-label="Next Slide"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default SwiperThumbInstagram;