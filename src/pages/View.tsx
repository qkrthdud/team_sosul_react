import React from 'react';

// SwiperSlider.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
    '//item-team-sosul.vercel.app/img/image/detail_img_1.jpg',
    '//item-team-sosul.vercel.app/img/image/detail_img_2.jpg',
    '//item-team-sosul.vercel.app/img/image/detail_img_3.jpg',
    '//item-team-sosul.vercel.app/img/image/detail_img_4.jpg',
    '//item-team-sosul.vercel.app/img/image/detail_img_5.jpg',
  ];


const View: React.FC = () => {
    return (
        <div className="ej_content mt-[-30px]" >
<div className="product_view">
    <div className="">
    <div className="maxW overflow-hidde ">
      <Swiper
        className='h swiper-container h-[532px]'
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction',
        }}
        // autoplay={{
        //   delay: 6000,
        //   disableOnInteraction: false,
        // }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className='overflow-hidden h-full  px-[10px]'>
            <img src={src} alt={`슬라이드 ${index + 1}`} className='w-full h-full object-cover rounded-[20px]' />
          </SwiperSlide>
        ))}

        {/* 페이지네이션 */}
        <div className="h_swiper-page flex">
          <div className="swiper-pagination !static swiper-pagination-fraction swiper-pagination-horizontal" />
          {/* 화살표 네비게이션 */}
          <div className="h_swiper-button">
            <div className="swiper-button-prev mt-0 !static" />
            <div className="swiper-button-next mt-0 !static" />
          </div>
        </div>
      </Swiper>
    </div>
    
      
        <div className="flex product_page_box container">
            {/* <!--// 상세 슬라이드 --> */}
            <div className="product_page_left">
                {/* <!-- 상세 상단타이틀& 탭메뉴 -->
                <!-- 상세페이지 타이틀과 탭메뉴 들어갈 페이지입니다. --> */}
{/* <!-- 
    각페이지마다 공통으로 들어갈 css가 있습니다. 
    뷰페이지에 들어갈 공통 class를 확인 후에 작업해주세요 
 --> */}
 <div className="h_view_top_title">
        <div>
            <h3 className="sub_tit">여주 블루마린캠핑장</h3>
            <p><img src="//item-team-sosul.vercel.app/img/icon/detail_place.svg" alt="위치" />경기도 여주시 능서면 중부대로 2545-74</p>
        </div>
        <div className="h_view_top_title_iconbox">
            <a href="tel:01012341234"><img src="//item-team-sosul.vercel.app/img/icon/detail_call.svg" alt="전화하기" /></a>
            <a className="btn_like"></a>
            <a href=""><img src="//item-team-sosul.vercel.app/img/icon/detail_share.svg" alt="공유하기" /></a>
        </div>
    </div>
    <nav className="h_view_top_tab">
        {/* <!-- <button className="tab-btn" data-tab="tab1">시설소개</button>
        <button className="tab-btn" data-tab="tab2">운영정책</button>
        <button className="tab-btn" data-tab="tab3">시설/환경</button>
        <button className="tab-btn" data-tab="tab4">배치도</button>
        <button className="tab-btn" data-tab="tab5">예약안내</button>
        <button className="tab-btn" data-tab="tab6">방문후기</button> --> */}
        <a href="" className="tab">시설소개</a>
        <a href="" className="tab">운영정책</a>
        <a href="" className="tab">시설/환경</a>
        <a href="" className="tab">배치도</a>
        <a href="" className="tab">예약안내</a>
        <a href="" className="tab">방문후기</a>
    </nav>                
    {/* <!--// 상세 상단타이틀& 탭메뉴 -->

                <!-- 상세 시설소개 -->
                <!-- 상세페이지 시설소개 들어갈 페이지입니다. -->
<!-- 
    각페이지마다 공통으로 들어갈 css가 있습니다. 
    뷰페이지에 들어갈 공통 class를 확인 후에 작업해주세요 
 --> */}
<div className="h_vinfo_wrap">  
    <div>
       <div className="h_vinfo_tit">
           <h4 className="list_tit">여주 블루마린캠핑장</h4>

           <div>
               <p className="basic_txt">아이들과 신나게 놀 수 있는 캠핑장!!!</p>
               <p className="basic_txt">가족캠핑하기 좋은 곳이며 넓은 주차공간과 텐트마다 공간이 충분해서 대형텐트로 단체캠핑이 가능합니다.</p>
           </div>
           <p className="basic_txt">가족과 함께 즐겁고 행복한 캠핑이 될 수 있도록 노력하겠습니다.</p>
       </div>
   </div>
   
   <div className="h_vinfo_imgbox">
       <div className="h_vinfo_campingimg">
           <img src="//item-team-sosul.vercel.app/img/image/detail_img_4.jpg" alt="캠핑장시설사진" />
       </div>
   
       <div>
           <h4 className="list_tit">소제목</h4>
   
           <section>
               <div className="h_vinfo_img">
                   <img src="//item-team-sosul.vercel.app/img/image/detail_img_1.jpg" alt="수영장전경" />
                   <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="수영장전경" />
               </div>
               <div className="h_vinfo_textbox">
                   <h5 className="basic_txt">수영장</h5>
                   <p>수영장이 있어 수영을 할 수 있습니다.</p>
               </div>
           </section>
           <section>
               <div className="h_vinfo_img">
                   <img src="//item-team-sosul.vercel.app/img/image/detail_img_2.jpg" alt="매점전경" />
                   <img src="//item-team-sosul.vercel.app/img/image/detail_img_6.jpg" alt="매점전경" />
               </div>
               <div className="h_vinfo_textbox">
                   <h5 className="basic_txt">매점</h5>
                   <p>매점에서 맛난 음식을 사먹을 수 있습니다.</p>
               </div>
           </section>
       </div>
   </div>
</div>                
{/* <!--// 상세 시설소개 -->

                <!-- 상세 운영정책 -->
                <!-- 상세페이지 운영정책 들어갈 페이지입니다. -->
<!-- 
    각페이지마다 공통으로 들어갈 css가 있습니다. 
    뷰페이지에 들어갈 공통 class를 확인 후에 작업해주세요 
 --> */}
    <div className="h_policy_wrap">
        <h4 className="list_tit">운영정책</h4>
        <div className="h_policy_textbox">
            <div className="h_policy_text">
                <h5>빈자리알림</h5>
                <p>가능</p>
            </div>
            <div className="h_policy_text">
                <h5>캠핑양도</h5>
                <p>가능</p>
            </div>
            <div className="h_policy_text">
                <h5>포인트사용</h5>
                <p>가능</p>
            </div>
            <div className="h_policy_text">
                <h5>매너타임</h5>
                <p>시작 22:30 ㅣ 종료 08:00</p>
            </div>
            <div className="h_policy_text">
                <h5>오토캠핑</h5>
                <p>입실 14:00 ㅣ 퇴실 12:00</p>
            </div>
            <div className="h_policy_text">
                <h5>카라반</h5>
                <p>입실 15:00 ㅣ 퇴실 11:00</p>
            </div>

        </div>
    </div>                
    {/* <!--// 상세 운영정책 -->

                <!-- 상세 시설환경 -->
                <!-- 시설환경페이지입니다. -->
<!-- 
    각페이지마다 공통으로 들어갈 css가 있습니다. 
    뷰페이지에 들어갈 공통 class를 확인 후에 작업해주세요 
--> */}
    <div className="h_setting_wrap">
        <h4 className="list_tit">시설 / 환경</h4>
        <div className="h_setting_imgbox">
            <div className="h_setting_iconbox">
                <img src="//item-team-sosul.vercel.app/img/icon/detail_bathroom.svg" alt="화장실" />
                <p>화장실</p>
            </div>
            <div className="h_setting_iconbox">
                <img src="//item-team-sosul.vercel.app/img/icon/detail_pool.svg" alt="수영장" />
                <p>수영장</p>
            </div>
            <div className="h_setting_iconbox">
                <img src="//item-team-sosul.vercel.app/img/icon/detail_shop.svg" alt="매장" />
                <p>매장</p>
            </div>
            <div className="h_setting_iconbox">
                <img src="//item-team-sosul.vercel.app/img/icon/detail_coffee.svg" alt="커피" />
                <p>커피</p>
            </div>
            <div className="h_setting_iconbox">
                <img src="//item-team-sosul.vercel.app/img/icon/detail_planting_strip.svg" alt="식수대" />
                <p>식수대</p>
            </div>
            <div className="h_setting_iconbox">
                <img src="//item-team-sosul.vercel.app/img/icon/detail_shower.svg" alt="샤워실" />
                <p>샤워실</p>
            </div>
        </div>
    </div>                
    {/* <!--// 상세 시설환경 -->

                <!-- 상세 배치도 -->
                <!-- 상세페이지 배치도 들어갈 페이지입니다. -->
<!-- 
    각페이지마다 공통으로 들어갈 css가 있습니다. 
    뷰페이지에 들어갈 공통 class를 확인 후에 작업해주세요 
 --> */}
    {/* <!-- <div className="h_layout_wrap">
        <h4 className="list_tit">배치도</h4>
        <img src="//item-team-sosul.vercel.app/img/image/detail_img_6.jpg" alt="배치도">
    </div> -->                 */}
    
    {/* <!--// 상세 배치도 -->
                
                <!-- 상세 예약안내 -->
                <!-- 
    각페이지마다 공통으로 들어갈 css가 있습니다. 
    뷰페이지에 들어갈 공통 class를 확인 후에 작업해주세요 
 --> */}
 <div className="reservation_sy">
    <h4 className="list_tit">예약안내</h4>
        <div className="res_sy_text_textbox">
            <div className="res_sy_text">
                <h5>예약가능</h5>
                <p>2025.03.01 까지</p>
            </div>
            <div className="res_sy_text">
                <h5>최대예약</h5>
                <p>최대 3박 / 2개 까지</p>
            </div>
            <div className="res_sy_text">
                <h5>오픈주기</h5>
                <p>매월 3일 10시 오픈 (1개월 단위)</p>
            </div>
            <div className="res_sy_text">
                <h5>다음예약</h5>
                <p>2025.03.03 10시 오픈 2025.04.30까지</p>
            </div>
        </div>


{/* <!-- 캘린더이미지 --> */}
        <div className="re_container_sy">
            캘린더 이미지
        </div>
{/* <!-- 일정/인원 선택 --> */}
        <div className="syre_container">
            <div className="checkinout_sy">
                <label htmlFor="checkin_sy">입실</label>
                <input type="date" id="checkin" value="2025-12-19" />
                <span>~</span>
                <label htmlFor="checkout_sy">퇴실</label>
                <input type="date" id="checkout_sy" value="2025-12-21" />
            </div>
            <div className="clock">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                    <g id="Group">
                    <path id="Vector" d="M13.0001 22.3494C17.6458 22.3494 21.4119 18.5833 21.4119 13.9376C21.4119 9.29195 17.6458 5.52588 13.0001 5.52588C8.35445 5.52588 4.58838 9.29195 4.58838 13.9376C4.58838 18.5833 8.35445 22.3494 13.0001 22.3494Z" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path id="Vector_2" d="M13 8.37598V13.9379" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path id="Vector_3" d="M13 13.9375L16.5067 16.2576" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>   
                </svg>
                현재시간: <span id="current-time_sy">9:37:39</span>
            </div>
            
        </div>
            <div className="syre_container">
                <div className="checkinout_sy">
                    <label htmlFor="number-select"> 대인 </label>
                    <select id="number-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select><span className="gn_sy">명</span>
                    <label htmlFor="number-select"> 소인 </label>
                    <select id="number-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select><span className="gn_sy">명</span>
                </div>
                <div className="nm_sel_sy">
                 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                    <g id="login">
                    <path id="Vector" d="M9.84473 18.0923V22.8158" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path id="Vector_2" d="M17.9539 13.4475C17.6747 13.3491 17.3754 13.29 17.0662 13.29H9.4657C8.03936 13.29 6.88232 14.4316 6.88232 15.8388V22.8946H19.6496V15.8388C19.6496 14.7465 18.9414 13.8116 17.9539 13.4475Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path id="Vector_3" d="M16.7671 18.0923V22.8158" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path id="Vector_4" d="M16.2581 8.47809C16.2581 10.1117 14.9215 11.4303 13.2658 11.4303C11.62 11.4303 10.2734 10.1117 10.2734 8.47809C10.2734 6.84454 11.61 5.52588 13.2658 5.52588C14.9115 5.52588 16.2581 6.84454 16.2581 8.47809Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                    </svg>
                가능인원 : <span id="current-time_sy">최대 4명</span>
            </div>
        </div>
        
{/* <!-- 객실 선택 --> */}
        <div className="roomsel_sy">
            <h4 className="list_tit">사이트(객실)을 선택해주세요.</h4>
            <div className="roomsel_sy2">
                <img src="//item-team-sosul.vercel.app/img/image/image 19.png" className="sy-image" alt="" />
                <div className="sy_imgtext">
                    <span className="sy_roomsel_sy2toptext basic_txt block">카라반 1호</span>
                    <span className='block'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                        <g id="Group">
                        <path id="Vector" d="M13.0001 22.3494C17.6458 22.3494 21.4119 18.5833 21.4119 13.9376C21.4119 9.29195 17.6458 5.52588 13.0001 5.52588C8.35445 5.52588 4.58838 9.29195 4.58838 13.9376C4.58838 18.5833 8.35445 22.3494 13.0001 22.3494Z" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path id="Vector_2" d="M13 8.37598V13.9379" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path id="Vector_3" d="M13 13.9375L16.5067 16.2576" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>   
                        </svg> 
                        입실 14시, 퇴실 12시
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g id="message">
                        <path id="Vector" d="M15.4707 1.29053H2.5295C2.21748 1.29053 1.91824 1.41448 1.69761 1.63511C1.47698 1.85574 1.35303 2.15498 1.35303 2.467V12.467C1.35303 12.779 1.47698 13.0783 1.69761 13.2989C1.91824 13.5195 2.21748 13.6435 2.5295 13.6435H4.88244V16.5846L8.55303 13.6435H15.4707C15.7827 13.6435 16.0819 13.5195 16.3026 13.2989C16.5232 13.0783 16.6471 12.779 16.6471 12.467V2.467C16.6471 2.15498 16.5232 1.85574 16.3026 1.63511C16.0819 1.41448 15.7827 1.29053 15.4707 1.29053Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                        </svg> 
                        침구류,식기류, tv, 냉장고, 전자렌지, 밥솥, 세면도구 구비되어있음. <br />
                            *(단 세면도구, 타올은 챙겨오세요)</span> <br/>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                <g id="login">
                <path id="Vector" d="M9.84473 18.0923V22.8158" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_2" d="M17.9539 13.4475C17.6747 13.3491 17.3754 13.29 17.0662 13.29H9.4657C8.03936 13.29 6.88232 14.4316 6.88232 15.8388V22.8946H19.6496V15.8388C19.6496 14.7465 18.9414 13.8116 17.9539 13.4475Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_3" d="M16.7671 18.0923V22.8158" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_4" d="M16.2581 8.47809C16.2581 10.1117 14.9215 11.4303 13.2658 11.4303C11.62 11.4303 10.2734 10.1117 10.2734 8.47809C10.2734 6.84454 11.61 5.52588 13.2658 5.52588C14.9115 5.52588 16.2581 6.84454 16.2581 8.47809Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                </svg> 성인 2명, 미성년2인</span><br/>
                <span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g id="car">
                <path id="Vector" d="M8.8833 12.9521V16.5572" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_2" d="M11.2866 0.935547L1.07227 16.5574H16.6941L6.47983 0.935547" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                </svg> 카라반</span>
                <div className="roombt_sy2">
                    <div className="saleall_sy">
                        <span className="sale_sy">20%</span>
                        <span className="price_sy">64,000원~</span>
                    </div>
                    <div className="salebt_sy">
                        <button className="salebt2_sy"> 선택하기 </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="roomsel_sy2">
                <img src="//item-team-sosul.vercel.app/img/image/image 19.png" className="sy-image" alt="" />
                <div className="sy_imgtext">
                <span className="sy_roomsel_sy2toptext basic_txt">카라반 2호</span><br/>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                <g id="Group">
                <path id="Vector" d="M13.0001 22.3494C17.6458 22.3494 21.4119 18.5833 21.4119 13.9376C21.4119 9.29195 17.6458 5.52588 13.0001 5.52588C8.35445 5.52588 4.58838 9.29195 4.58838 13.9376C4.58838 18.5833 8.35445 22.3494 13.0001 22.3494Z" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_2" d="M13 8.37598V13.9379" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_3" d="M13 13.9375L16.5067 16.2576" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>   
                    </svg> 입실 14시, 퇴실 12시</span><br/>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g id="message">
                <path id="Vector" d="M15.4707 1.29053H2.5295C2.21748 1.29053 1.91824 1.41448 1.69761 1.63511C1.47698 1.85574 1.35303 2.15498 1.35303 2.467V12.467C1.35303 12.779 1.47698 13.0783 1.69761 13.2989C1.91824 13.5195 2.21748 13.6435 2.5295 13.6435H4.88244V16.5846L8.55303 13.6435H15.4707C15.7827 13.6435 16.0819 13.5195 16.3026 13.2989C16.5232 13.0783 16.6471 12.779 16.6471 12.467V2.467C16.6471 2.15498 16.5232 1.85574 16.3026 1.63511C16.0819 1.41448 15.7827 1.29053 15.4707 1.29053Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                </svg> 침구류,식기류, tv, 냉장고, 전자렌지, 밥솥, 세면도구 구비되어있음. <br/>
                            *(단 세면도구, 타올은 챙겨오세요)</span> <br/>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                <g id="login">
                <path id="Vector" d="M9.84473 18.0923V22.8158" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_2" d="M17.9539 13.4475C17.6747 13.3491 17.3754 13.29 17.0662 13.29H9.4657C8.03936 13.29 6.88232 14.4316 6.88232 15.8388V22.8946H19.6496V15.8388C19.6496 14.7465 18.9414 13.8116 17.9539 13.4475Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_3" d="M16.7671 18.0923V22.8158" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_4" d="M16.2581 8.47809C16.2581 10.1117 14.9215 11.4303 13.2658 11.4303C11.62 11.4303 10.2734 10.1117 10.2734 8.47809C10.2734 6.84454 11.61 5.52588 13.2658 5.52588C14.9115 5.52588 16.2581 6.84454 16.2581 8.47809Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                </svg> 성인 2명, 미성년2인</span><br/>
                <span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g id="car">
                <path id="Vector" d="M8.8833 12.9521V16.5572" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_2" d="M11.2866 0.935547L1.07227 16.5574H16.6941L6.47983 0.935547" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                </svg> 카라반</span>
                <div className="roombt_sy2">
                    <div className="saleall_sy">
                        <span className="sale_sy">20%</span>
                        <span className="price_sy">64,000원~</span>
                    </div>
                    <div className="salebt_sy">
                        <button className="salebt2_sy"> 선택하기 </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="roomsel_sy2">
                <img src="//item-team-sosul.vercel.app/img/image/image 19.png" className="sy-image" alt="" />
                <div className="sy_imgtext">
                <span className="sy_roomsel_sy2toptext basic_txt">카라반 3호</span><br/>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                <g id="Group">
                <path id="Vector" d="M13.0001 22.3494C17.6458 22.3494 21.4119 18.5833 21.4119 13.9376C21.4119 9.29195 17.6458 5.52588 13.0001 5.52588C8.35445 5.52588 4.58838 9.29195 4.58838 13.9376C4.58838 18.5833 8.35445 22.3494 13.0001 22.3494Z" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_2" d="M13 8.37598V13.9379" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_3" d="M13 13.9375L16.5067 16.2576" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>   
                    </svg> 입실 14시, 퇴실 12시</span><br/>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g id="message">
                <path id="Vector" d="M15.4707 1.29053H2.5295C2.21748 1.29053 1.91824 1.41448 1.69761 1.63511C1.47698 1.85574 1.35303 2.15498 1.35303 2.467V12.467C1.35303 12.779 1.47698 13.0783 1.69761 13.2989C1.91824 13.5195 2.21748 13.6435 2.5295 13.6435H4.88244V16.5846L8.55303 13.6435H15.4707C15.7827 13.6435 16.0819 13.5195 16.3026 13.2989C16.5232 13.0783 16.6471 12.779 16.6471 12.467V2.467C16.6471 2.15498 16.5232 1.85574 16.3026 1.63511C16.0819 1.41448 15.7827 1.29053 15.4707 1.29053Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                </svg> 침구류,식기류, tv, 냉장고, 전자렌지, 밥솥, 세면도구 구비되어있음. <br/>
                            *(단 세면도구, 타올은 챙겨오세요)</span> <br/>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                <g id="login">
                <path id="Vector" d="M9.84473 18.0923V22.8158" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_2" d="M17.9539 13.4475C17.6747 13.3491 17.3754 13.29 17.0662 13.29H9.4657C8.03936 13.29 6.88232 14.4316 6.88232 15.8388V22.8946H19.6496V15.8388C19.6496 14.7465 18.9414 13.8116 17.9539 13.4475Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_3" d="M16.7671 18.0923V22.8158" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_4" d="M16.2581 8.47809C16.2581 10.1117 14.9215 11.4303 13.2658 11.4303C11.62 11.4303 10.2734 10.1117 10.2734 8.47809C10.2734 6.84454 11.61 5.52588 13.2658 5.52588C14.9115 5.52588 16.2581 6.84454 16.2581 8.47809Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                </svg> 성인 2명, 미성년2인</span><br/>
                <span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g id="car">
                <path id="Vector" d="M8.8833 12.9521V16.5572" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path id="Vector_2" d="M11.2866 0.935547L1.07227 16.5574H16.6941L6.47983 0.935547" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                </svg> 카라반</span>
                    <div className="roombt_sy2">
                            <div className="saleall_sy">
                            <span className="sale_sy">20%</span>
                            <span className="price_sy">64,000원~</span>
                    </div>
                    <div className="salebt_sy">
                        <button className="salebt2_sy"> 선택하기 </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
</div>                
{/* <!--// 상세 예약안내 -->

                <!-- 상세 방문후기 -->
                <!-- 
    각페이지마다 공통으로 들어갈 css가 있습니다. 
    뷰페이지에 들어갈 공통 class를 확인 후에 작업해주세요 
 --> */}
<div className="detail_conBox">
    <div className="list_tit">방문후기</div>
    <ul className="flex review_infoBox">
        <li>
            <div className="review_infoTit">사용자의 총 평점은</div>
            <div className="review_infoIn">
                <div className="flex star_box">
                    <i className="bi bi-star-fill apricot"></i>
                    <i className="bi bi-star-fill apricot"></i>
                    <i className="bi bi-star-fill apricot"></i>
                    <i className="bi bi-star-fill apricot"></i>
                    <i className="bi bi-star-fill apricot"></i>
                </div>
                <div className="review_infoTxt">4.9 <span className="gray3">/ 5.0</span></div>
            </div>
        </li>
        <li>
            <div className="review_infoTit">사용자 전체 리뷰수는</div>
            <div className="review_infoIn">
                <div className="review_infoTxt apricot">300개</div>
                <div className="icon_area">
                    <div className='w-[34px] h-[34px] relative' >
                        <div data-svg-wrapper="" className="left-[7px] top-[7px] absolute" >
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4615 1.9375H2.53846C2.13044 1.9375 1.73912 2.09959 1.4506 2.3881C1.16209 2.67662 1 3.06794 1 3.47596V16.5529C1 16.9609 1.16209 17.3522 1.4506 17.6407C1.73912 17.9293 2.13044 18.0913 2.53846 18.0913H5.61538V21.9375L10.4154 18.0913H19.4615C19.8696 18.0913 20.2609 17.9293 20.5494 17.6407C20.8379 17.3522 21 16.9609 21 16.5529V3.47596C21 3.06794 20.8379 2.67662 20.5494 2.3881C20.2609 2.09959 19.8696 1.9375 19.4615 1.9375Z" stroke="#3F422F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className="review_infoTit">리뷰평점의 비율은</div>
            <div className="review_infoIn">
                <div className="flex progress_box">
                    <div className="progressbar">
                        <div className="progressbar_in"></div>
                    </div>
                    <div className="progressbar">
                        <div className="progressbar_in"></div>
                    </div>
                    <div className="progressbar">
                        <div className="progressbar_in"></div>
                    </div>
                    <div className="progressbar">
                        <div className="progressbar_in"></div>
                    </div>
                    <div className="progressbar">
                        <div className="progressbar_in"></div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div className="review_photoSome review_photoBox">
        <div className="basic_txt">포토리뷰</div>
        <div className="photoSome_box">
            <a className="photo_some">
                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                <span className="photo_num sub_txt">1</span>
            </a>
            <a className="photo_some">
                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                <span className="photo_num sub_txt">1 +</span>
            </a>
            <a className="photo_some">
                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                <span className="photo_num sub_txt">1</span>
            </a>
            <a className="photo_some">
                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                <span className="photo_num sub_txt">1 +</span>
            </a>
            <a className="photo_some">
                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                <span className="photo_num sub_txt">1</span>
            </a>
            <a className="photo_some">
                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                <span className="photo_num sub_txt">1 +</span>
            </a>
            <a className="photo_some">
                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                <span className="photo_num sub_txt">1</span>
            </a>
            <a className="photo_some">
                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                <span className="photo_num sub_txt">1 +</span>
            </a>
        </div>
    </div>
    <div className="review_all">
        <div className="basic_txt flex review_all_tit">
            <div>전체리뷰</div>
            <div className="flex review_filter">
                <a href="" className="sub_txt">최신순</a>
                <a href="" className="sub_txt">추천순</a>
                <a href="" className="sub_txt">평점 높은순</a>
                <a href="" className="sub_txt">평점 낮은순</a>
            </div>
        </div>
        <ul className="review_all_box">
            <li className="review_all_in">
                <div className="review_all_top flex">
                    <div className="flex star_box">
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                    </div>
                    <div className="flex review_all_btns">
                        <a className="edit sub_txt">수정</a>
                        <a className="delete sub_txt">삭제</a>
                    </div>
                </div>
                <div className="review_all_btm">
                    <div className="flex tit">
                        <div className="bold">별명인지 아이디인지모르겠음 님의 리뷰</div>
                        <p>25-02-20</p>
                    </div>
                    <div className="txt">
                        아이들과 신나게 놀 수 있는 캠핑장!!!<br/>
                        가족캠핑하기 좋은곳이며 넓은 주차공간과 텐트마다 공간이 충분해서 대형텐트로 단체캠핑이 가능합니다.<br/>
                        <br/>
                        가족과 함께 즐겁고 행복한 캠핑이 될 수 있도록 노력하겠습니다.
                    </div>
                    <div className="photoSome_box">
                        <a className="photo_some">
                            <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                            <span className="photo_num sub_txt">1</span>
                        </a>
                        <a className="photo_some">
                            <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                            <span className="photo_num sub_txt">1 +</span>
                        </a>
                        <a className="photo_some">
                            <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                            <span className="photo_num sub_txt">1</span>
                        </a>
                        <a className="photo_some">
                            <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                            <span className="photo_num sub_txt">1 +</span>
                        </a>
                        <a className="photo_some">
                            <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                            <span className="photo_num sub_txt">1</span>
                        </a>
                    </div>
                </div>
            </li> 
            <li className="review_all_in">
                <div className="review_all_top flex">
                    <div className="flex star_box">
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                    </div>
                    <div className="flex review_all_btns">
                        <a className="edit sub_txt">수정</a>
                        <a className="delete sub_txt">삭제</a>
                    </div>
                </div>
                <div className="review_all_btm">
                    <div className="flex tit">
                        <div className="bold">별명인지 아이디인지모르겠음 님의 리뷰</div>
                        <p>25-02-20</p>
                    </div>
                    <div className="txt">
                        아이들과 신나게 놀 수 있는 캠핑장!!!<br/>
                        가족캠핑하기 좋은곳이며 넓은 주차공간과 텐트마다 공간이 충분해서 대형텐트로 단체캠핑이 가능합니다.<br/>
                        <br/>
                        가족과 함께 즐겁고 행복한 캠핑이 될 수 있도록 노력하겠습니다.
                    </div>
                </div>
            </li>
            <li className="review_all_in">
                <div className="review_all_top flex">
                    <div className="flex star_box">
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                    </div>
                    <div className="flex review_all_btns">
                        <a className="edit sub_txt">수정</a>
                        <a className="delete sub_txt">삭제</a>
                    </div>
                </div>
                <div className="review_all_btm">
                    <div className="flex tit">
                        <div className="bold">별명인지 아이디인지모르겠음 님의 리뷰</div>
                        <p>25-02-20</p>
                    </div>
                    <div className="txt">
                        아이들과 신나게 놀 수 있는 캠핑장!!!<br/>
                        가족캠핑하기 좋은곳이며 넓은 주차공간과 텐트마다 공간이 충분해서 대형텐트로 단체캠핑이 가능합니다.<br/>
                        <br/>
                        가족과 함께 즐겁고 행복한 캠핑이 될 수 있도록 노력하겠습니다.
                    </div>
                    <div className="photoSome_box">
                        <a className="photo_some">
                            <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                            <span className="photo_num sub_txt">1</span>
                        </a>
                        <a className="photo_some">
                            <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                            <span className="photo_num sub_txt">1 +</span>
                        </a>
                        <a className="photo_some">
                            <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                            <span className="photo_num sub_txt">1</span>
                        </a>
                        <a className="photo_some">
                            <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                            <span className="photo_num sub_txt">1 +</span>
                        </a>
                        <a className="photo_some">
                            <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                            <span className="photo_num sub_txt">1</span>
                        </a>
                    </div>
                </div>
            </li>
            <li className="review_all_in">
                <div className="review_all_top flex">
                    <div className="flex star_box">
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                        <i className="bi bi-star-fill apricot"></i>
                    </div>
                    <div className="flex review_all_btns">
                        <a className="edit sub_txt">수정</a>
                        <a className="delete sub_txt">삭제</a>
                    </div>
                </div>
                <div className="review_all_btm">
                    <div className="flex tit">
                        <div className="bold">별명인지 아이디인지모르겠음 님의 리뷰</div>
                        <p>25-02-20</p>
                    </div>
                    <div className="txt">
                        아이들과 신나게 놀 수 있는 캠핑장!!!<br/>
                        가족캠핑하기 좋은곳이며 넓은 주차공간과 텐트마다 공간이 충분해서 대형텐트로 단체캠핑이 가능합니다.<br/>
                        <br/>
                        가족과 함께 즐겁고 행복한 캠핑이 될 수 있도록 노력하겠습니다.
                    </div>
                </div>
            </li>   
        </ul>
        <div className="paging flex">
            <div className="prev">
                <a href="">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD"></rect>
                        <path d="M38 40L28 29.9814" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M28 29.9814L38 19.9999" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M30 40L20 29.9814" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M20 29.9814L30 19.9999" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                    </svg>
                </a>
                <a href="">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD"></rect>
                        <path d="M34 40L24 29.9814" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M24 29.9814L34 19.9999" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                    </svg>
                </a>
            </div>
            <div className="number flex">
                <a href="" className="num active">1</a>
                <a href="" className="num">2</a>
                <a href="" className="num">3</a>
                <a href="" className="num">4</a>
                <a href="" className="num">5</a>
            </div>
            <div className="next">
                <a href="">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD"></rect>
                        <path d="M26 20L36 30.0186" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M36 30.0186L26 40.0001" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                    </svg>
                </a>
                <a href="">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD"></rect>
                        <path d="M22 20L32 30.0186" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M32 30.0186L22 40.0001" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M30 20L40 30.0186" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M40 30.0186L30 40.0001" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>


<div className="review_popup">
    <div className="pop_box pop_list">
        <div className="pop_tit flex">
            <div className="list_tit">포토앨범</div>
            <a className="pop_close">
                <div className="close-svg">
                    <svg xmlns="//www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none">
                        <path d="M1 21L21 1M1 1L21 21" stroke="#3F422F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </a>
        </div>
        <div className="pop_body">
            <div className="photoSome_box">  
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>  
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>  
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>  
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>  
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
                <a className="photo_some">
                    <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                    <span className="photo_num sub_txt">1</span>
                </a>
            </div>        
        </div>
    </div>
    <div className="pop_box pop_view">
        <div className="pop_tit flex">
            <div className="list_tit flex">
                <a className="backMove">
                    <svg width="35" height="35" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="59" height="59" rx="9.5" fill="white" stroke="#DDDDDD"></rect>
                        <path d="M34 40L24 29.9814" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M24 29.9814L34 19.9999" stroke="#3F422F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"></path>
                    </svg>
                </a>
                <span>포토리뷰</span>
            </div>
            <a className="pop_close">
                <div className="close-svg">
                    <svg xmlns="//www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none">
                        <path d="M1 21L21 1M1 1L21 21" stroke="#3F422F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </a>
        </div>
        <div className="pop_body">
            <div className="swiper popreviewswiper swiper-initialized swiper-horizontal swiper-pointer-events">
                <div className="swiper-wrapper" id="swiper-wrapper-843f56f11059c75c4" aria-live="polite" style={{"transitionDuration" : "0ms"}}>
                    <div className="swiper-slide">
                        <div className="flex photoBox">
                            <div className="sameImg">
                                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                            </div>
                            <div className="photoBox_txtBox">
                                <div className="review_all_in">
                                    <div className="review_all_top flex">
                                        <div className="flex star_box">
                                            <i className="bi bi-star-fill apricot"></i>
                                            <i className="bi bi-star-fill apricot"></i>
                                            <i className="bi bi-star-fill apricot"></i>
                                            <i className="bi bi-star-fill apricot"></i>
                                            <i className="bi bi-star-fill apricot"></i>
                                        </div>
                                    </div>
                                    <div className="review_all_btm">
                                        <div className="flex tit">
                                            <div className="bold">별명인지 아이디인지모르겠음 님의 리뷰</div>
                                            <p>25-02-20</p>
                                        </div>
                                        <div className="txt">
                                            아이들과 신나게 놀 수 있는 캠핑장!!!<br/>
                                            가족캠핑하기 좋은곳이며 넓은 주차공간과 텐트마다 공간이 충분해서 대형텐트로 단체캠핑이 가능합니다.<br/>
                                            <br/>
                                            가족과 함께 즐겁고 행복한 캠핑이 될 수 있도록 노력하겠습니다.
                                        </div>
                                        <div className="photoSome_box">
                                            <a className="photo_review_some">
                                                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                                                <span className="photo_num sub_txt">1</span>
                                            </a>
                                            <a className="photo_review_some">
                                                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                                                <span className="photo_num sub_txt">1 +</span>
                                            </a>
                                            <a className="photo_review_some">
                                                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                                                <span className="photo_num sub_txt">1</span>
                                            </a>
                                            <a className="photo_review_some">
                                                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                                                <span className="photo_num sub_txt">1 +</span>
                                            </a>
                                            <a className="photo_review_some">
                                                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                                                <span className="photo_num sub_txt">1</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="flex photoBox">
                            <div className="sameImg">
                                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                            </div>
                            <div className="photoBox_txtBox">
                                <div className="review_all_in">
                                    <div className="review_all_top flex">
                                        <div className="flex star_box">
                                            <i className="bi bi-star-fill apricot"></i>
                                            <i className="bi bi-star-fill apricot"></i>
                                            <i className="bi bi-star-fill apricot"></i>
                                            <i className="bi bi-star-fill apricot"></i>
                                            <i className="bi bi-star-fill apricot"></i>
                                        </div>
                                    </div>
                                    <div className="review_all_btm">
                                        <div className="flex tit">
                                            <div className="bold">별명인지 아이디인지모르겠음 님의 리뷰</div>
                                            <p>25-02-20</p>
                                        </div>
                                        <div className="txt">
                                            아이들과 신나게 놀 수 있는 캠핑장!!!<br/>
                                            가족캠핑하기 좋은곳이며 넓은 주차공간과 텐트마다 공간이 충분해서 대형텐트로 단체캠핑이 가능합니다.<br/>
                                            <br/>
                                            가족과 함께 즐겁고 행복한 캠핑이 될 수 있도록 노력하겠습니다.
                                        </div>
                                        <div className="photoSome_box">
                                            <a className="photo_review_some">
                                                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                                                <span className="photo_num sub_txt">1</span>
                                            </a>
                                            <a className="photo_review_some">
                                                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                                                <span className="photo_num sub_txt">1 +</span>
                                            </a>
                                            <a className="photo_review_some">
                                                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                                                <span className="photo_num sub_txt">1</span>
                                            </a>
                                            <a className="photo_review_some">
                                                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                                                <span className="photo_num sub_txt">1 +</span>
                                            </a>
                                            <a className="photo_review_some">
                                                <img src="//item-team-sosul.vercel.app/img/image/detail_img_3.jpg" alt="포토리뷰1" />
                                                <span className="photo_num sub_txt">1</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="photo-button-next"  role="button" aria-label="Next slide" aria-controls="swiper-wrapper-843f56f11059c75c4" aria-disabled="false"></div>
                <div className="photo-button-prev"  role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-843f56f11059c75c4" aria-disabled="false"></div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        </div>
    </div>
    <div className="pop_bg"></div>
</div>
                 {/* <!--// 상세 방문후기 --> */}
            </div>
            <div className="product_page_right">
                <div className="sticky_box">
                    {/* <!-- 오른쪽 슬라이드 -->
                    <!-- 
    각페이지마다 공통으로 들어갈 css가 있습니다. 
    뷰페이지에 들어갈 공통 class를 확인 후에 작업해주세요 
 --> */}
    <div className="rescheck_sy">
        <div className="rescheck_sy1">
            <img src="//item-team-sosul.vercel.app/img/image/image 2.png" alt="" />
            <span className="rc_sy1">카라반 1호</span><br/>
            <span className="rc_sy2">성인 2명, 미성년2인</span>
        </div>
        <div className="rescheck_sy2">
            <div className="roombt_sy2">
                <div className="saleall_sy">
                <span className="sale_sy">20%</span>
                <span className="price_sy">64,000원&nbsp;~</span>
                </div>
            </div>
        </div>
        <div className="rescheck_sy3">
            <span className="gn_sy2"> 입실 </span><span className="gn_sy3">2025.12.19</span> 
            <span className="gn_sy2">~&nbsp;&nbsp;&nbsp;&nbsp;퇴실</span> 
            <span className="gn_sy3">2025.12.21</span> <br/>
        </div>
        <div className="rescheck_sy3">
            <span className="gn_sy2">대인</span> 
            <span className="gn_sy3">3 명</span> 
            <span className="gn_sy2">소인</span> 
            <span className="gn_sy3">2 명</span>
        </div>
        <div className="rescheck_sy4">
            <span>사이트 요금</span> 
            <span>1명 추가 + 64,000원</span>
        </div>
        <div className="rescheck_sy5">
            <span>총액</span> 
            <span>70,000원</span>
        </div>
        <div className="rescheck_sy6">
            <a href="" className="sebt_sy">예약하기</a>
        </div>
    </div>                    
    {/* <!--// 오른쪽 슬라이드 --> */}
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    );
};

export default View;