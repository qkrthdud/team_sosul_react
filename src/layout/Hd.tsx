import { Link } from 'react-router-dom'
import { useEffect } from 'react';

interface HdProps {
    isHome: boolean;
  }
 const Hd: React.FC<HdProps> = ({ isHome })=> {


 
    useEffect(() => {
        
        const handleScroll = () => {
            if (window.scrollY > 0) {
                document.body.classList.add('down');
            } else {
                document.body.classList.remove('down');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header id="hd" className="  fixed top-0 left-0 right-0 w-full z-50  bg-sub_apricot bg-white ">
        <div className="max-w container_full flex justify-between items-center ej_innertop">
            <h1 className="order-[1]"><Link to="/" className="main-logo"><img src="//item-team-sosul.vercel.app/img/logo/logo.svg" alt="" /></Link></h1>

            <button className="Category-btn lg:hidden color-white bg-color-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#categoryMenu" aria-controls="categoryMenu">
                <svg xmlns="//www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <line x1="3" y1="5.4" x2="17" y2="5.4" stroke="#3F422F" stroke-width="1.2"></line>
                    <line x1="3" y1="10.0667" x2="17" y2="10.0667" stroke="#3F422F" stroke-width="1.2"></line>
                    <line x1="3" y1="14.7333" x2="17" y2="14.7333" stroke="#3F422F" stroke-width="1.2"></line>
                </svg>
            </button> 

            <ul id="gnb" className="hidden lg:flex order-[0] gap-3 organic w-0"> 
                <li><Link to="/product/list" className="color-white whitespace-nowrap">예약하기</Link></li>
                <li><Link to="/onlyhere" className="color-white whitespace-nowrap">오직여기</Link></li>
                <li><Link to="/promotion" className="color-white whitespace-nowrap">프로모션</Link></li>
                <li><Link to="/Wishlist" className="color-white whitespace-nowrap">위시리스트</Link></li>
            </ul>

            <ul className="util flex order-2  whitespace-nowrap items-center justify-end gap-lg-5 gap-2 font-point_txt organic w-0">
                <li>
                    <Link to="" className=" whitespace-nowrap d-flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="//www.w3.org/2000/svg">
                            <path d="M16.9529 4.69562H4V16H16.9529V4.69562Z" stroke="#3F422F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M4 8.08698H16.9529" stroke="#3F422F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7.5314 3V5.82609" stroke="#3F422F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M13.4199 3V5.82609" stroke="#3F422F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M13.2458 10.5493L10.3019 13.3754L8.47086 11.806" stroke="#3F422F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    <span className="hidden lg:block mr-6">예약확인</span></Link></li>
                <li>
                       <Link to="/login" className=" whitespace-nowrap d-flex">
                        <svg xmlns="//www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
                            <path d="M19.5 11V6" stroke="#3F422F" stroke-width="1.2" stroke-linejoin="round"></path>
                            <path d="M7.23251 10.9999H10.047L5.77351 1L1.5 10.9999H4.31452L5.77351 7.5861L7.23251 10.9999Z" stroke="#3F422F" stroke-width="1.2" stroke-linejoin="round"></path>
                            <path d="M4.31592 11H7.23391" stroke="#3F422F" stroke-width="1.2" stroke-linejoin="round"></path>
                            <path d="M1.5 11V6" stroke="#3F422F" stroke-width="1.2" stroke-linejoin="round"></path>
                            <path d="M5.77405 1L7.42447 4.85502L8.79551 3.46322L10.1717 4.85502L11.5479 3.46322L12.9242 4.85502L14.2952 3.46322L15.6714 4.85502L16.4992 4.01994L15.2058 1H5.77405Z" stroke="#3F422F" stroke-width="1.2" stroke-linejoin="round"></path>
                            <path d="M14.2954 3.46313L12.9244 4.85493L11.5482 3.46313L10.1719 4.85493L8.79572 3.46313L7.42468 4.85493L10.0478 10.9999H19.4795L16.4994 4.01985L15.6716 4.85493L14.2954 3.46313Z" stroke="#3F422F" stroke-width="1.2" stroke-linejoin="round"></path>
                            <path d="M10.046 11V6" stroke="#3F422F" stroke-width="1.2" stroke-linejoin="round"></path>
                        </svg>
                        <span className="hidden lg:block">로그인</span>
                    </Link>
                </li>
                <li>
                    <Link to="/adm/register">캠핑장 등록하기</Link>
                </li>
            </ul>
        </div>
        {
            isHome && 
            <div className="search-box flex  jcc hidden lg:flex absolute">
   
    
   <div className="search-container hidden lg:flex items-center font-basic_txt color-white"> 

       <div className="topwhere font-basic_txt organic">어디갈까요? 
           <button className="openModal flex items-center sub_txt">
           <svg xmlns="//www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
               <path d="M19.4253 8.4061C19.4253 4.45249 16.0986 1.29641 12.1646 1.73486C9.18381 2.0637 6.77338 4.50541 6.40538 7.55943C6.19194 9.32835 6.65562 10.9763 7.55723 12.2803L11.9622 19.3447C12.4186 19.9985 13.3643 19.9985 13.8206 19.3447L18.2256 12.2803C18.9801 11.1842 19.429 9.84995 19.429 8.4061H19.4253Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
               <path d="M12.8889 11.1279C14.5087 11.1279 15.8218 9.77921 15.8218 8.11548C15.8218 6.45175 14.5087 5.10303 12.8889 5.10303C11.269 5.10303 9.95587 6.45175 9.95587 8.11548C9.95587 9.77921 11.269 11.1279 12.8889 11.1279Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
               <path d="M16.9072 14.6731H21.4447L24.3887 24.6945H1.38867L4.33267 14.6731H9.05411" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
           </svg>
           지역을 선택하세요.
           </button>
       </div> 
   

       <div className="topwhen font-basic_txt organic">언제갈까요?
           <button className="day-modal flex items-center sub_txt">
           <svg xmlns="//www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M23 3.86963H1V23.0001H23V3.86963Z" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
               <path d="M1 9.60864H23" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
               <path d="M7 1V5.78261" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
               <path d="M17 1V5.78261" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
               <path d="M16.7037 13.7759L11.7037 18.5585L8.59375 15.9025" stroke="#3F422F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
           </svg>
           날짜를 선택하세요.
           </button>
       </div>

       <div className="close-svg">
           <svg xmlns="//www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none">
               <path d="M1 21L21 1M1 1L21 21" stroke="#3F422F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
           </svg>
       </div>
       <button className="search-btn flex jic items-center font-basic_txt color-white">
           <span>검색</span>
       </button>
   </div> 

</div>
        }
        


<div className="modal hidden">
    <div className="modal-content">
        <span className="close">×</span>
        <h2 className="modal-text">어디로 갈까요?</h2>
            <button className="modal-search-btn flex sub_txt gray2 bg-color-white">
                <svg xmlns="//www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15.4667 9.5625C15.4667 12.858 12.8077 15.525 9.53333 15.525C6.25896 15.525 3.6 12.858 3.6 9.5625C3.6 6.26698 6.25896 3.6 9.53333 3.6C12.8077 3.6 15.4667 6.26698 15.4667 9.5625Z" stroke="#3F422F" stroke-width="1.2"></path>
                    <line y1="-0.6" x2="5.29153" y2="-0.6" transform="matrix(0.70553 0.70868 -0.70553 0.70868 13.2667 14.25)" stroke="#3F422F" stroke-width="1.2"></line>
                </svg>지역을 검색해보세요.
            </button>
        <div className="location-box flex">
            <ul className="location-nm sub_txt">
                <li data-value="전체">전체</li>
                <li data-value="차박">차박</li>
                <li data-value="글램핑">글램핑</li>
                <li data-value="카라반">카라반</li>
                <li data-value="오토캠핑">오토캠핑</li>
                <li data-value="텐트캠핑">텐트캠핑</li>
            </ul>

            <div className="divider"></div>
            
            <ul className="location-chk sub_txt">
                <li data-value="전체">전체</li>
                <li data-value="서울">서울</li>
                <li data-value="대구">대구</li>
                <li data-value="광주">광주</li>
                <li data-value="경기">경기</li>
                <li data-value="경북">경북</li>
                <li data-value="경남">경남</li>
                <li data-value="인천">인천</li>
                <li data-value="울산">울산</li>
                <li data-value="세종">세종</li>
                <li data-value="충북">충북</li>
                <li data-value="충남">충남</li>
                <li data-value="전북">전북</li>
                <li data-value="전남">전남</li>
                <li data-value="대전">대전</li>
                <li data-value="강원">강원</li>
                <li data-value="부산">부산</li>
                <li data-value="제주">제주</li>
            </ul>
        </div>
        <div className="modal-btn-set flex">
            <button className="modal-btn-reset bg-color-white">          
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M24.6099 8L24.9591 12.3888" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                <path d="M24.959 12.3889L20.5854 12.0244" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                <path d="M26.3713 16.3828C26.7813 19.1771 25.9157 22.108 23.7593 24.2644C20.145 27.8787 14.2984 27.8787 10.6993 24.2644C7.10023 20.6501 7.10023 14.8035 10.6993 11.1892C14.2984 7.57495 20.1602 7.57495 23.7593 11.1892L24.4579 11.8878" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                </svg>
            </button> 
            <button className="modal-btn-search panBlack_bg">          
                <span>검색하기</span>
            </button>
        </div>  
    </div>
</div>

<div className="modal-day hidden">
    <div className="modal-content-day">
        <button className="close-modal">×</button>
        <h2 className="modal-day-text black">언제 갈까요?</h2>
        <div className="modal-body">
            

<div className="calendar_container">
    <button className="left_button bg-color-white"> &lt; </button>

    <div className="calendar_wrapper">
        {/* <!-- 현재 달 달력 --> */}
        <table className="calendar black" id="calendar_current">
            <thead>
                <tr>
                    <th className="title font-basic_txt organic" id="title_current">2025년 5월</th>
                </tr>
            </thead>
            <tbody><tr><td></td><td></td><td></td><td></td><td className="calendar_days">1</td><td className="calendar_days">2</td><td className="calendar_days">3</td></tr><tr><td className="calendar_days">4</td><td className="calendar_days">5</td><td className="calendar_days">6</td><td className="calendar_days">7</td><td className="calendar_days">8</td><td className="calendar_days">9</td><td className="calendar_days">10</td></tr><tr><td className="calendar_days">11</td><td className="calendar_days">12</td><td className="calendar_days">13</td><td className="calendar_days">14</td><td className="calendar_days">15</td><td className="calendar_days">16</td><td className="calendar_days">17</td></tr><tr><td className="calendar_days">18</td><td className="calendar_days">19</td><td className="calendar_days">20</td><td className="calendar_days">21</td><td className="calendar_days">22</td><td className="calendar_days">23</td><td className="calendar_days">24</td></tr><tr><td className="calendar_days">25</td><td className="calendar_days">26</td><td className="calendar_days">27</td><td className="calendar_days">28</td><td className="calendar_days">29</td><td className="calendar_days">30</td><td className="calendar_days">31</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody>
        </table>

        {/* <!-- 다음 달 달력 --> */}
        <table className="calendar black" id="calendar_next">
            <thead>
                <tr>
                    <th className="title font-basic_txt organic" id="title_next">2025년 6월</th>
                </tr>
            </thead>
            <tbody><tr><td className="calendar_days">1</td><td className="calendar_days">2</td><td className="calendar_days">3</td><td className="calendar_days">4</td><td className="calendar_days">5</td><td className="calendar_days">6</td><td className="calendar_days">7</td></tr><tr><td className="calendar_days">8</td><td className="calendar_days">9</td><td className="calendar_days">10</td><td className="calendar_days">11</td><td className="calendar_days">12</td><td className="calendar_days">13</td><td className="calendar_days">14</td></tr><tr><td className="calendar_days">15</td><td className="calendar_days">16</td><td className="calendar_days">17</td><td className="calendar_days">18</td><td className="calendar_days">19</td><td className="calendar_days">20</td><td className="calendar_days">21</td></tr><tr><td className="calendar_days">22</td><td className="calendar_days">23</td><td className="calendar_days">24</td><td className="calendar_days">25</td><td className="calendar_days">26</td><td className="calendar_days">27</td><td className="calendar_days">28</td></tr><tr><td className="calendar_days">29</td><td className="calendar_days">30</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody>
        </table>
    </div>

    <button className="right_button bg-color-white"> &gt; </button>
</div>

<div className="modal-btn-set flex">
        <button className="modal-btn-reset bg-color-white">          
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M24.6099 8L24.9591 12.3888" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
            <path d="M24.959 12.3889L20.5854 12.0244" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
            <path d="M26.3713 16.3828C26.7813 19.1771 25.9157 22.108 23.7593 24.2644C20.145 27.8787 14.2984 27.8787 10.6993 24.2644C7.10023 20.6501 7.10023 14.8035 10.6993 11.1892C14.2984 7.57495 20.1602 7.57495 23.7593 11.1892L24.4579 11.8878" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
            </svg>
        </button> 
        <button className="modal-btn-search panBlack_bg">          
            <span>검색하기</span>
        </button>
</div>  

  
        </div>
    </div>
</div>

<div className="mo-search container_full lg:hidden flex justify-between items-center bg-color-white scrolled">
    <button className="mo-search-btn container_full bg-color-white font-point_txt">
        <svg xmlns="//www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15.4667 9.5625C15.4667 12.858 12.8077 15.525 9.53333 15.525C6.25896 15.525 3.6 12.858 3.6 9.5625C3.6 6.26698 6.25896 3.6 9.53333 3.6C12.8077 3.6 15.4667 6.26698 15.4667 9.5625Z" stroke="#3F422F" stroke-width="1.2"></path>
            <line y1="-0.6" x2="5.29153" y2="-0.6" transform="matrix(0.70553 0.70868 -0.70553 0.70868 13.2667 14.25)" stroke="#3F422F" stroke-width="1.2"></line>
        </svg>
        어디로 떠나볼까요?
    </button>
</div> 
        
        </header>
    )
}

export default Hd
