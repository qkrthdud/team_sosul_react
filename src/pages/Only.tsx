import React, { useState, useEffect } from 'react';
import Quickicon from '../components/Quickicon';
import Productitme from '../ui/Productitme';
import Filter from '../ui/Filter';

import { fetchData } from '../lib/api';
import { Campground } from '../types/common';



import '../scss/list.hyuna.scss';
import Pagenation from '../ui/Pagenation';
import { useParams } from 'react-router-dom';

const Only: React.FC = () => {
    const [campgrounds, setCampgrounds] = useState<Campground[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1); // ✅ 현재 페이지
    const itemsPerPage = 16; // ✅ 페이지당 항목 수
    const [totalItems, setTotalItems] = useState<number>(0); // ✅ 총 캠핑장 수
    const { name } = useParams<{ name?: string }>();
 
    useEffect(() => {
        const fetchCampgrounds = async () => {
            setLoading(true); // ✅ 로딩 시작
            try {
                const offset = (currentPage - 1) * itemsPerPage;
    
                const { data, count } = await fetchData('campgrounds', 'select', {
                    limit: itemsPerPage,
                    offset: offset,
                });
    
                if (data) {
                    setCampgrounds([...data]);
                }
    
                if (count !== null) {
                    setTotalItems(count); // ✅ 총 개수를 상태에 반영 (이거 있어야 페이지네이션 총 페이지 계산 가능)
                }
            } catch (err) {
                console.log('캠핑장 정보를 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };
    
        fetchCampgrounds();
    }, [currentPage]);
    

    return (
        <div className="product_list">
            <div className="container">
                <div>
                    <div className="sub_filter">
                        <div className="sub_filter_in flex justify-center items-center border border-[#ddd] rounded-full p-[5px] max-w-[600px] mx-auto">
                            {/* 장소 버튼 */}
                            <a href="#" className="icon_box flex items-center space-y-1">
                                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="search">
                                    <path d="M12.4667 6.5625C12.4667 9.85802 9.80771 12.525 6.53333 12.525C3.25896 12.525 0.6 9.85802 0.6 6.5625C0.6 3.26698 3.25896 0.6 6.53333 0.6C9.80771 0.6 12.4667 3.26698 12.4667 6.5625Z" stroke="#332E2A" strokeWidth="1.2" />
                                    <line y1="-0.6" x2="5.29153" y2="-0.6" transform="matrix(0.70553 0.70868 -0.70553 0.70868 10.2666 11.25)" stroke="#332E2A" strokeWidth="1.2" />
                                    </g>
                                </svg>
                                <span>장소</span>
                            </a>

                            {/* 일정 버튼 */}
                            <a href="#" className="icon_box flex items-center space-y-1">
                                <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28 7.83997H6V27.04H28V7.83997Z" stroke="#3F422F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 13.6H28" stroke="#3F422F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 4.95996V9.75996" stroke="#3F422F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 4.95996V9.75996" stroke="#3F422F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.11 17.7823L16.11 22.5823L13 19.9167" stroke="#3F422F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>일정</span>
                            </a>

                            {/* 인원 버튼 */}
                            <a href="#" className="icon_box flex items-center space-y-1">
                                <svg width="26" height="26" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8739 22.4333V28.6102" stroke="#3F422F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23.4783 16.3592C23.113 16.2306 22.7217 16.1534 22.3174 16.1534H12.3783C10.513 16.1534 9 17.6461 9 19.4863V28.7131H25.6957V19.4863C25.6957 18.0579 24.7696 16.8354 23.4783 16.3592Z" stroke="#3F422F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.9261 22.4333V28.6102" stroke="#3F422F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.2608 9.86059C21.2608 11.9968 19.513 13.7212 17.3478 13.7212C15.1956 13.7212 13.4348 11.9968 13.4348 9.86059C13.4348 7.7244 15.1826 6 17.3478 6C19.5 6 21.2608 7.7244 21.2608 9.86059Z" stroke="#3F422F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>인원</span>
                            </a>

                            {/* 검색 버튼 */}
                            <a className="search_icon flex items-center justify-center bg-main text-white rounded-full w-8 h-8">
                                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="search">
                                    <path d="M12.4667 6.5625C12.4667 9.85802 9.80771 12.525 6.53333 12.525C3.25896 12.525 0.6 9.85802 0.6 6.5625C0.6 3.26698 3.25896 0.6 6.53333 0.6C9.80771 0.6 12.4667 3.26698 12.4667 6.5625Z" stroke="#fff" strokeWidth="1.2" />
                                    <line y1="-0.6" x2="5.29153" y2="-0.6" transform="matrix(0.70553 0.70868 -0.70553 0.70868 10.2666 11.25)" stroke="#fff" strokeWidth="1.2" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <Quickicon activetab={name} ></Quickicon>
                    <Filter></Filter>
                    <div className="sub_con_box flex flex-wrap ">
                        {
                            loading ? (<p>로딩중...</p>) : campgrounds && campgrounds.map((item) => (
                                <Productitme key={item.id} fatchdata={item}></Productitme>
                            ))
                        }
                        
                    </div>
                    <Pagenation
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalItems={totalItems} // ✅ 추가
                    itemsPerPage={itemsPerPage} // ✅ 추가
                    />
                    

                    
                </div>

            </div>
        </div>
    );
};

export default Only;