import React from 'react';
import '../scss/quickicon.hyuna.scss';

const Banner: React.FC = () => {
    const handleDownload = () => {
        alert('쿠폰이 다운로드되었습니다!');
      };
    return (
        <div className="h_sosul_banner flex align-center justify-center gap-[52px] bg-sub_apricot w-100 py-[20px]">
      <div>
        <p className="coupon_text_small">쿠폰받고 첫 예약 준비해요</p>
        <p className="coupon_text_large">첫 예약 누구나 즉시할인!</p>
      </div>
      <div className="coupon_img_text">
        <a
          className="download_coupon"
          onClick={handleDownload}
          href="#none"
        >
          <img
            src="//item-team-sosul.vercel.app/img/image/banner_coupon2.svg"
            alt="첫예약할인쿠폰"
          />
          <div className="coupon_text_box">
            <span>첫예약할인쿠폰</span>
            <p className="coupon_text">
              10<span className="percent">%</span>
              <span className="coupon_text_end">쿠폰</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Banner;