import React, { useEffect } from 'react';
import '../scss/quick.hyuna.scss'

const Quick:React.FC = () => {

    useEffect(() => {
        const handleScroll = () => {
          const menu = document.querySelector('.quick-menu');
          const footer = document.querySelector('footer');
          if (!menu || !footer) return;
    
          const footerTop = footer.offsetTop;
          const windowHeight = window.innerHeight;
    
          if (window.scrollY > 100 && window.scrollY + windowHeight < footerTop) {
            menu.classList.add('show');
          } else {
            menu.classList.remove('show');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // 초기 실행 (스크롤 안 해도 상태 반영)
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
        <div className="hidden lg:flex flex-col quick-menu text-point show fixed bottom-10 right-[3.125rem] z-50 text-[13px]">
      {/* 예약확인 버튼 */}
        <button className="quick-btn btn-reserve organic flex flex-col items-center p-2 bg-white shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.9529 4.69562H4V16H16.9529V4.69562Z" stroke="#3F422F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 8.08698H16.9529" stroke="#3F422F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5314 3V5.82609" stroke="#3F422F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.4199 3V5.82609" stroke="#3F422F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.2458 10.5493L10.3019 13.3754L8.47086 11.806" stroke="#3F422F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>예약확인</span>
        </button>

        {/* 고객센터 버튼 */}
        <button className="quick-btn btn-chat organic flex items-center p-2 bg-white shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M17.6025 16.8001C14.6904 16.8001 12.2705 14.9007 11.5459 12.3334H8.45605C4.9834 12.3334 2.16699 15.0317 2.16699 18.3588V18.9614C2.16699 22.2885 4.9834 24.9868 8.45605 24.9868L6.8291 29.8334L14.54 24.9868H16.8779C20.3506 24.9868 23.167 22.2885 23.167 18.9614V18.8304L19.9268 16.787H17.6025V16.8001Z" stroke="#3F422F" stroke-width="1.56" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M16.1072 17.312L12.2241 21.0291C12.0965 21.1512 11.8698 21.1512 11.7422 21.0291L9.9707 19.3333" stroke="#3F422F" stroke-width="1.56" stroke-miterlimit="10" stroke-linecap="round"></path>
                <path d="M26.1877 4.16663H17.785C14.3146 4.16663 11.5 6.86296 11.5 10.1876V10.7897C11.5 11.3394 11.5956 11.8499 11.7459 12.3603C12.4701 14.9258 14.8884 16.8237 17.7986 16.8237H20.135L23.3731 18.8656L27.8409 21.6666L26.215 16.8237C29.6854 16.8237 32.5 14.1274 32.5 10.8028V10.1876C32.4863 6.86296 29.6581 4.16663 26.1877 4.16663Z" stroke="#3F422F" stroke-width="1.56" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M20.0898 8.99613C20.0898 7.95156 20.9685 7.11047 22.0598 7.11047C23.151 7.11047 24.0297 7.95156 24.0297 8.99613C24.0297 10.0407 23.151 10.8818 22.0598 10.8818V12.0213" stroke="#3F422F" stroke-width="1.56" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M22.127 15.345C22.6102 15.345 23.002 14.9532 23.002 14.47C23.002 13.9867 22.6102 13.595 22.127 13.595C21.6437 13.595 21.252 13.9867 21.252 14.47C21.252 14.9532 21.6437 15.345 22.127 15.345Z" fill="#3F422F"></path>
            </svg>
            <span>고객센터</span>
        </button>

        {/* 로그인 버튼 */}
        <button className="quick-btn btn-log organic flex items-center p-2 bg-white shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="63" height="39" viewBox="0 0 63 39" fill="none">
            <path d="M62.3795 36.6495L46.6295 1.21203C46.5134 0.951285 46.3243 0.729764 46.0849 0.574279C45.8456 0.418793 45.5663 0.336007 45.2809 0.335938H17.7184C17.4356 0.336358 17.1589 0.417985 16.9211 0.571112C16.6833 0.724239 16.4945 0.942424 16.3772 1.19973V1.23418L0.619797 36.6495C0.519736 36.8743 0.477435 37.1205 0.496739 37.3658C0.516043 37.6111 0.596341 37.8477 0.730334 38.0541C0.864327 38.2605 1.04777 38.4301 1.26398 38.5475C1.4802 38.665 1.72234 38.7265 1.96839 38.7266H61.0309C61.2769 38.7265 61.5191 38.665 61.7353 38.5475C61.9515 38.4301 62.135 38.2605 62.2689 38.0541C62.4029 37.8477 62.4832 37.6111 62.5025 37.3658C62.5218 37.1205 62.4795 36.8743 62.3795 36.6495ZM16.2418 8.76957V35.7734H4.23984L16.2418 8.76957ZM19.195 35.7734V8.76957L31.1969 35.7734H19.195ZM34.4282 35.7734L19.9898 3.28906H44.3211L58.7594 35.7734H34.4282Z" fill="black"/>
            </svg>
            <span>입점문의</span>
        </button>

        {/* TOP 버튼 */}
        <button className="quick-btn btn-top organic text-white flex items-center p-2 shadow bg-main">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M7 22L17.0186 12" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M17.0186 12L27.0001 22" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
            </svg>
            <span>TOP</span>
        </button>
        </div>
    );
};

export default Quick;