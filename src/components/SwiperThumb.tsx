import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Swiper 관련 import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// UI 컴포넌트, API 함수, 타입 import
import Title from "../ui/Title";
import { fetchData } from '../lib/api'; 
import type { Database } from '../types/supabase.types'; 

type Campground = Database['public']['Tables']['campgrounds']['Row'];

// 각 슬라이드 아이템을 위한 별도의 컴포넌트를 만들면 상태 관리가 더 쉬워집니다.
function CampgroundCard({ campground }: { campground: Campground }) {
  // 1. '좋아요' 상태를 이 카드 컴포넌트 내부에서 관리합니다.
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (e: React.MouseEvent) => {
    // Link의 기본 동작(페이지 이동)을 막습니다.
    e.preventDefault();
    // liked 상태를 반전시킵니다 (true -> false, false -> true).
    setLiked(!liked);
    // TODO: DB에 '좋아요' 상태를 저장하는 로직을 추가할 수 있습니다.
    console.log(`'좋아요' 상태 변경: ${campground.campground_name}, 현재 상태: ${!liked}`);
  };

  // 할인이 적용된 경우, 원래 가격을 계산
  const originalPrice = campground.discount_rate && campground.discount_rate > 0 
    ? Math.round(campground.price / (1 - campground.discount_rate / 100))
    : null;

  return (
    <Link to={`/product/view/${campground.id}`}>
      <div className="con_box">
        <div className="con_img_box">
          <img
            src={campground.main_photo_url || '/images/default-campground.jpg'}
            alt={campground.campground_name}
            className="con_img"
            loading="lazy"
          />
        </div>
        
        {/* 2. 상태와 핸들러를 버튼에 직접 연결합니다. */}
        <button
          className={`btn_like ${liked ? "on" : ""}`}
          onClick={handleLikeClick}
        ></button>

        <div className="con_txt">
          <div className="location point_txt gray3">{campground.location}</div>
          <div className="camping basic_txt">{campground.campground_name}</div>
          
          {originalPrice && (
            <div className="won sub_txt gray3" style={{ textDecoration: 'line-through' }}>
              {originalPrice.toLocaleString()}원
            </div>
          )}

          <div className="price">
            {campground.discount_rate && campground.discount_rate > 0 && (
              <span className="percent list_tit organic">
                {campground.discount_rate}%
              </span>
            )}
            <span className="won2 list_tit panBlack">
              {campground.price.toLocaleString()}원 ~
            </span>
          </div>
          
          <button className="check_btn sub_txt gray3" onClick={(e) => e.preventDefault()}>
            예약하기
          </button>
        </div>
      </div>
    </Link>
  );
}


function SwiperThumb() {
  const [campgrounds, setCampgrounds] = useState<Campground[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      try {
        const { data } = await fetchData('campgrounds', 'select', { limit: 10, order: { column: 'discount_rate', ascending: false } });
        if (data) setCampgrounds(data);
      } catch (err) {
        console.error("추천 캠핑장 정보를 불러오는 데 실패했습니다.", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecommendations();
  }, []); 

  return (
    <div className="main_con main_con_four gray5_bg p100">
      <div className="container">
        
        <Title dataobj={{ tit:"당신을 위한 추천 지금 여기", btnshow: true, txtalign : "center" }} />
        
        <div className="slider">
          <div className="inner">
            <Swiper
              /* ... Swiper props ... */
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={4}
              onBeforeInit={(swiper) => {
                if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              pagination={{ el: ".same-pagination", clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 4 },
              }}
            >
              {loading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <SwiperSlide key={index}><div className="con_box skeleton"></div></SwiperSlide>
                ))
              ) : (
                campgrounds.map((campground) => (
                  <SwiperSlide key={campground.id}>
                    {/* 3. 각 카드에 대한 로직을 자식 컴포넌트로 분리하여 렌더링합니다. */}
                    <CampgroundCard campground={campground} />
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>

          <div className="mobile">
            <div className="swiper-pagination same-pagination"></div>
          </div>

          <button ref={prevRef} className="btn btn_prev same-button-prev" aria-label="Previous Slide"></button>
          <button ref={nextRef} className="btn btn_next same-button-next" aria-label="Next Slide"></button>
        </div>
      </div>
    </div>
  );
}

export default SwiperThumb;