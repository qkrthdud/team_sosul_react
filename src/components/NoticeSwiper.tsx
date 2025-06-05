import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";

import { fetchData } from "../lib/api";
import type { Notice } from "../types/common"; // 올바른 타입 경로 확인 필요

function NoticeSwiper() {
  const swiperRef = useRef<any>(null);
  const [noticeList, setNoticeList] = useState<Notice[]>([]); // ✅ 배열로 선언

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await fetchData("notices", "select"); // ✅ 올바른 제네릭과 테이블명
        if (data) {
          setNoticeList([...data]);
        }
      } catch (error) {
        console.error("공지사항을 가져오는 중 오류 발생:", error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="main_notice">
      <div className="container d-flex items-center justify-between">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          direction="vertical"
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="notice_swiper w-full"
        >
          {noticeList.map((notice) => (
            <SwiperSlide key={notice.id}>
              [공지사항]{" "}
              <Link className="notice_tit" to={notice.link}>
                {notice.title}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 수동 next 버튼 */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="다음 공지 보기"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M17.5 27.5L25 22.5" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
            <path d="M25 22.5L32.5 27.5" stroke="#3F422F" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NoticeSwiper;
