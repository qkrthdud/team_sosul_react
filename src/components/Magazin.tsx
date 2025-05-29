import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Thumbs, Controller} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/controller';

// import 'swiper/css/free-mode';
// import 'swiper/css/effect-fade';


// Define the types for slide data
interface SlideData {
  id: number;
  shortImg: string;
  longImg: string;
  title: string;
  description: string;
}

const magazineSlidesData: SlideData[] = [
  {
    id: 1,
    shortImg: '//item-team-sosul.vercel.app/img/image/magazin_short.jpg',
    longImg: '//item-team-sosul.vercel.app/img/image/magazin_long.jpg',
    title: '소슬이 추천하는<br>감성글램핑',
    description: '소중한 사람들과 함께 모여<br>편안한 휴식과 낭만과 여유로움을<br>즐겨보세요.',
  },
  {
    id: 2,
    shortImg: '//item-team-sosul.vercel.app/img/image/magazin_short.jpg', // Assuming different images
    longImg: '//item-team-sosul.vercel.app/img/image/magazin_long.jpg',   // Assuming different images
    title: '두 번째 추천<br>캠핑 아이템',
    description: '최고의 캠핑 경험을 위한<br>머스트 해브 아이템들을<br>만나보세요.',
  },
  {
    id: 3,
    shortImg: '//item-team-sosul.vercel.app/img/image/magazin_short.jpg', // Assuming different images
    longImg: '//item-team-sosul.vercel.app/img/image/magazin_long.jpg',   // Assuming different images
    title: '자연 속 힐링<br>특별한 순간',
    description: '아름다운 자연 속에서<br>잊지 못할 추억을 만들고<br>마음의 평화를 찾으세요.',
  },
];

const MagazineSection: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [galleryTopSwiper, setGalleryTopSwiper] = useState<SwiperCore | null>(null);
  const [galleryTextSwiper, setGalleryTextSwiper] = useState<SwiperCore | null>(null);

  // Refs for navigation buttons
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  // Effect to ensure navigation elements are ready for Swiper
  // This is important because Swiper might initialize before the refs are attached.
  useEffect(() => {
    if (galleryTextSwiper && !galleryTextSwiper.destroyed) {
        if (galleryTextSwiper.params.navigation && typeof galleryTextSwiper.params.navigation !== 'boolean') {
            galleryTextSwiper.params.navigation.prevEl = prevRef.current;
            galleryTextSwiper.params.navigation.nextEl = nextRef.current;
            galleryTextSwiper.navigation.destroy(); // Destroy old nav
            galleryTextSwiper.navigation.init();    // Init new nav
            galleryTextSwiper.navigation.update();  // Update nav state
        }
    }
  }, [galleryTextSwiper]);


  return (
    <div className="magazin py-16 md:py-24 bg-gray-100"> {/* Replaced p100 with py-16/py-24, gray5_bg with bg-gray-100 */}
      <div className="container mx-auto px-4 lg:flex lg:flex-row lg:justify-between lg:items-center">
        {/* Gallery Top Swiper (Small Images) */}
        <div className="w-full lg:w-[340px] mb-8 lg:mb-0 lg:mr-8 order-1 lg:order-1">
          <Swiper
            modules={[Controller, Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            onSwiper={setGalleryTopSwiper}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            controller={{ control: galleryTextSwiper }}
            className="gallery-top swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
            // style={{ width: '340px' }} // Swiper handles width, ensure parent gives space
          >
            {magazineSlidesData.map((slide) => (
              <SwiperSlide key={`top-${slide.id}`} data-swiper-slide-index={slide.id -1} style={{width: '340px'}}>
                <div className="swiper-slide-container">
                  <img src={slide.shortImg} alt={`이미지${slide.id}`} className="w-full h-auto object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Magazine Text Swiper */}
        <div className="w-full lg:w-auto order-3 lg:order-2 flex-grow lg:mx-8 relative"> {/* Added relative for buttons */}
          <Swiper
            modules={[Controller, Navigation]}
            spaceBetween={30} // Adjust as needed
            slidesPerView={1}
            onSwiper={setGalleryTextSwiper}
            controller={{ control: galleryTopSwiper }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="magazin_txt gallery-txt swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
            // style={{ width: '240px' }} // Swiper handles width based on slidesPerView and parent
          >
            {magazineSlidesData.map((slide) => (
              <SwiperSlide key={`text-${slide.id}`} data-swiper-slide-index={slide.id -1} style={{width: '240px'}}>
                <div className="swiper-slide-container text-center lg:text-left">
                  <div className="point_txt font-semibold mb-2">SOSUL MAGAZINE</div> {/* Replaced organic */}
                  <div
                    className="main_tit text-2xl md:text-3xl font-bold mb-3 leading-tight"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <div
                    className="basic_txt text-gray-600 text-sm md:text-base" // Replaced gray3
                    dangerouslySetInnerHTML={{ __html: slide.description }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
          <div className="magazin_btns flex justify-center lg:justify-start mt-6 lg:mt-4">
            <div
              ref={prevRef}
              className="magazin-button-prev cursor-pointer w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center mr-2" // Example styling
              role="button"
              aria-label="Previous slide"
            >
              {/* SVG or Font Icon for Prev */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div
              ref={nextRef}
              className="magazin-button-next cursor-pointer w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center" // Example styling
              role="button"
              aria-label="Next slide"
            >
              {/* SVG or Font Icon for Next */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>


        {/* Gallery Thumbs Swiper (Large Images acting as Thumbs) */}
        {/* This one is tricky. The original HTML structure puts it after the text.
            Visually, it often appears below or to the side. I'll assume it's meant to be the main visual driver.
            For flex layout, order can be controlled with `order-` classes.
        */}
        <div className="w-full lg:w-[calc(100%-340px-240px-4rem)] xl:w-auto order-2 lg:order-3 mt-8 lg:mt-0"> {/* Adjust width and margins as needed */}
          <div className="wrap_thumb_layout">
            <Swiper
              modules={[Thumbs, Controller]}
              spaceBetween={10}
              slidesPerView={1} // Typically thumbs might show more, but original HTML structure is one large image
              watchSlidesProgress={true}
              onSwiper={setThumbsSwiper}
              // controller={{ control: galleryTopSwiper }} // Thumbs usually control, not get controlled by the main gallery
              className="gallery-thumbs swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
            >
              {magazineSlidesData.map((slide) => (
                <SwiperSlide key={`thumb-${slide.id}`} data-swiper-slide-index={slide.id -1}>
                  <div className="swiper-slide-container">
                    <img src={slide.longImg} alt={`썸네일 이미지${slide.id}`} className="w-full h-auto object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineSection;