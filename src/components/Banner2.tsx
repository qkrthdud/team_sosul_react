import React from 'react';
import '../scss/yena.css';

const Banner2: React.FC = () => {
  return (
    <div className="y_sosul_banner gray4_bg">
      <div>
        <p className="coupon_text_small">당일 예약 가능한 스팟 보기</p>
        <p className="coupon_text_large">지금 떠나세요!</p>
      </div>
      <div className="coupon_img_text">
        <img
          src="//item-team-sosul.vercel.app/img/image/banner3.jpg"
          alt="당일예약이미지"
        />
      </div>
    </div>
  );
};

export default Banner2;