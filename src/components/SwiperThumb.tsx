import fourswiper from "../data/db.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwiperThumb() {
  const { main_con_four } = fourswiper;
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="main_con main_con_four gray5_bg p100">
      <div className="container">
        <div className="tit">
          <div className="point_txt organic d-lg-none">NOW HERE</div>
          <div className="main_tit panBlack">
            당신을 위한 추천
            <br className="d-lg-none" /> 지금 여기
          </div>
          <button className="all-btn point_txt gray3">전체보기</button>
        </div>

        <div className="slider">
          <div className="inner">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={4}
              onBeforeInit={(swiper) => {
                // 수동으로 navigation 엘리먼트 설정
                if (
                  typeof swiper.params.navigation !== 'boolean' &&
                  swiper.params.navigation
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                el: ".same-pagination",
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1440: {
                  slidesPerView: 4,
                },
              }}
            >
              {Array.isArray(main_con_four) &&
                main_con_four.map((v, i) => (
                  <SwiperSlide key={v.id || i}>
                    <div className="con_box">
                      <div className="con_img_box">
                        <img
                          src={v.image}
                          alt={v.name}
                          className="con_img"
                        />
                      </div>
                      <button className="btn_like"></button>
                      <div className="con_txt">
                        <div className="location point_txt gray3">
                          {v.location}
                        </div>
                        <div className="camping basic_txt">{v.name}</div>
                        <div className="won sub_txt gray3">
                          {v.originalPrice.toLocaleString()}원
                        </div>
                        <div className="price">
                          <span className="percent list_tit organic">
                            {v.discountRate}%
                          </span>
                          <span className="won2 list_tit panBlack">
                            {v.discountedPrice.toLocaleString()}원 ~
                          </span>
                        </div>
                        <div className="review d-flex">
                          <span className="star sub_txt gray3">★</span>
                          <span className="jum sub_txt gray3">
                            {v.rating}
                          </span>
                          <span className="number sub_txt gray3">
                            ({v.reviewCount})
                          </span>
                        </div>
                        <button className="check_btn sub_txt gray3">
                          예약하기
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          {/* 페이지네이션 */}
          <div className="mobile">
            <div className="swiper-pagination same-pagination"></div>
          </div>

          {/* 내 커스텀 버튼 */}
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

        <button className="mo-all-btn point_txt gray3 d-lg-none">
          전체보기
        </button>
      </div>
    </div>
  );
}

export default SwiperThumb;
