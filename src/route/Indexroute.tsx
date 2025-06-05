import Videocontainer from '../components/Videocontainer.tsx';
import Quickicon from '../components/Quickicon.tsx';
import SwiperThumb from '../components/SwiperThumb.tsx';
import Banner from '../ui/Banner.tsx';
import Instagram from '../components/Instagram.tsx';
import Morebox from '../ui/Morebox.tsx';
import Title from '../ui/Title.tsx';


import Magazin from '../components/Magazin.tsx';
import Hotspot from '../components/Hotspot.tsx';
import NoticeSwiper from '../components/NoticeSwiper.tsx';

function Indexroute() {


    return (
        <div className='ej_content'>
            <Videocontainer></Videocontainer>
            <Quickicon></Quickicon>
            <SwiperThumb></SwiperThumb>
            <Banner dataobj={{
                bg:"bg-sub_apricot",
                sub : {text : "쿠폰받고 첫 예약 준비해요",color:"text-main"},
                big : {text : "첫 예약 누구나 즉시할인!",color:"text-white"},
                img : {
                    src: "//item-team-sosul.vercel.app/img/image/banner_coupon2.svg",
                    alt: "첫예약할인쿠폰",
                    des: true
                }
                }}></Banner>
            <Hotspot></Hotspot>
            <Magazin></Magazin>
            <Instagram></Instagram>
            <Banner dataobj={{
                bg:"bg-gray_4",
                sub : {text : "당일 예약 가능한 스팟 보기",color:"text-main"},
                big : {text : "지금 떠나세요!",color:"text-sub_panBlack"},
                img : {
                    src: "//item-team-sosul.vercel.app/img/image/banner3.jpg",
                    alt: "당일예약이미지",
                    des: false
                }
                }}></Banner>
                <div className="more p100">
                    <div className="container">
                        <div className="point_txt organic block lg:hidden">SEARCH</div>
                        <div className="main_tit">
                        
                        </div>
                        <Title dataobj={{
                            tit:`가고 싶은 캠핑장소를  <br class='block lg:hidden' /> 찾아보세요!`,
                            btnshow: false,
                            txtalign : "center"
                        }}>
                        </Title>

                        <div className="more_area lg:flex">
                            <Morebox dataobj={ {
                                bigtit:"언제 떠날까요?",
                                subtit:"캘린더로 일정 선택이 가능합니다.",
                                bg:"bg-sub_ivory",
                                br:"border-[#b6996f]",
                                hv: {bg:"hover:bg-[#b6996f]", color:"hover:text-white"},
                                a:{text:"날짜로 장소 찾기", link:"/search/day", color:"sub_apricot"},
                                color:"text-[#b6996f]",
                                img:{ src:"//item-team-sosul.vercel.app/img/image/when.jpg", alt:"캘린더"}
                            }}></Morebox>
                            <Morebox dataobj={ {
                                bigtit:"어디로 떠날까요?",
                                subtit:"지도로 장소를 찾으실 수 있습니다.",
                                bg:"bg-gray_5",
                                br:"border-gray_3",
                                hv: {bg:"hover:bg-gray_3", color:"hover:text-white"},
                                a:{text:"위치로 장소찾기", link:"/search/location", color:"gray_5"},
                                color:"text-gray_3",
                                img:{ src:"//item-team-sosul.vercel.app/img/image/where.jpg", alt:"지도"}
                            }}></Morebox>

                        </div>
                    </div>
                </div>
            <NoticeSwiper></NoticeSwiper>
        </div>
    )
}

export default Indexroute
