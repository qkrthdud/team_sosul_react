import React from 'react';
import '../scss/quickicon.hyuna.scss';
interface DataObj {
  sub: { text: string; color: string };
  big: { text: string; color: string };
  bg:string;
  img: {
    src: string;
    alt: string;
    des?: boolean;
  };
}

interface BannerProps {
  dataobj: DataObj;
}

const Banner: React.FC<BannerProps> = ({ dataobj  }) => {
    const handleDownload = () => {
        alert('쿠폰이 다운로드되었습니다!');
      };
    return (
      <div className={`h_sosul_banner ${dataobj.bg} flex align-center justify-center gap-[52px] w-100 py-[20px]`}>
      <div>
        <p className={`coupon_text_small ${dataobj.sub.color}`}>{dataobj.sub.text}</p>
        <p className={`coupon_text_large ${dataobj.big.color}`}>{dataobj.big.text}</p>
      </div>
      <div className="coupon_img_text">
        <a
          className="download_coupon"
          onClick={handleDownload}
          href="#none"
        >
          <img
            src={dataobj.img.src}
            alt={dataobj.img.alt}
          />
          { dataobj.img.des &&
          <div className="coupon_text_box">
            <span>첫예약할인쿠폰</span>
            <p className="coupon_text">
              10<span className="percent">%</span>
              <span className="coupon_text_end">쿠폰</span>
            </p>
          </div>
           }
        </a>
      </div>
    </div>
  );
};

export default Banner;