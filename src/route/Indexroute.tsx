import Videocontainer from '../components/Videocontainer.tsx';
import Quickicon from '../components/Quickicon.tsx';
import SwiperThumb from '../components/SwiperThumb.tsx';
import Banner from '../components/Banner.tsx';
import Instagram from '../components/Instagram.tsx';



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
        </div>
    )
}

export default Indexroute
