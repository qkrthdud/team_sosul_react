import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reservation: React.FC = () => {
  const navigate = useNavigate();

  return (
    // 1. 최상위 product_write 클래스를 View.tsx와 동일하게 ej_content로 변경하고 mt-[-30px] 추가
    <div className="ej_content mt-[-30px]">
      {/* 2. product_view 클래스 추가 */}
      <div className="product_view">
        {/* 3. container 클래스를 View.tsx와 동일한 위치로 조정 */}
        <div className="container mx-auto flex flex-col md:flex-row product_page_box">
          
          {/* --- 왼쪽 영역 --- */}
          {/* 4. 왼쪽 영역을 product_page_left 클래스로 감싸기 */}
          <div className="product_page_left">
            <div className="flex justify-between items-center mb-6 pb-4 border-b">
              <h2 className="text-2xl font-bold">예약하기 및 결제</h2>
              <div className="flex space-x-4">
                <a href="tel:01012341234">
                  <img className="w-6 h-6" src="//item-team-sosul.vercel.app/img/icon/detail_call.svg" alt="전화하기" />
                </a>
                <a href="#">
                  <img className="w-6 h-6" src="//item-team-sosul.vercel.app/img/icon/detail_heart.svg" alt="찜하기" />
                </a>
                <a href="#">
                  <img className="w-6 h-6" src="//item-team-sosul.vercel.app/img/icon/detail_share.svg" alt="공유하기" />
                </a>
              </div>
            </div>

            {/* 사이트 선택 */}
            <div className="border-b border-gray-300 mb-6 borderbt_sy">
              <h2 className="text-2xl font-bold mb-4">사이트 선택</h2>
              <div className="grid grid-cols-4 gap-2 site_sy">
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className=" text-center py-2 cursor-pointer hover:bg-gray-200 siteC_sy "
                  >
                    C{i + 1}
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-8" />

            {/* 인원/차량 선택 */}
            <div className="border-b border-gray-300 pb-4 mb-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 syre_container">
                  <span className="font-medium">대인</span>
                  <select className="border rounded px-2 py-1">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <span>명</span>
                  <span className="font-semibold ml-4">소인</span>
                  <select className="border rounded-md px-2 py-1">
                    {[0, 1, 2, 3, 4].map((n) => (<option key={n} value={n}>{n}</option>))}
                  </select>
                  <span>명</span>
                </div>
                <div className="text-sm text-gray-600">가능인원: 최대 4명</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 syre_container">
                  <span className="font-medium">차량</span>
                  <select className="border rounded px-2 py-1">
                    {[0, 1, 2].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <span>대</span>
                </div>
                <div className="text-sm text-gray-600">기준차량: 최대 2대</div>
              </div>
            </div>

            <hr className="my-8" />

            {/* 추가선택 */}
            <section>
              <h3 className="text-xl font-bold mb-4">추가선택</h3>
              {['장작', '난로', '숯불'].map((item) => (
                <div key={item} className="flex justify-between items-center py-3">
                  <span className="font-semibold">{item}</span>
                  <div className="flex items-center border rounded-md">
                    <button className="px-3 py-1 text-lg">-</button>
                    <span className="px-4 font-semibold">0</span>
                    <button className="px-3 py-1 text-lg">+</button>
                  </div>
                </div>
              ))}
            </section>
            
            {/* 이용안내 */}
            <div className="mt-12 mb-8">
              <h4 className="text-lg font-semibold mb-4">이용안내</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                {[
                  ['예약가능', '2025.03.01 까지'],
                  ['오픈주기', '매월 3일 10시 오픈 (1개월 단위)'],
                  ['다음예약', '2025.03.03 10시 오픈 ~ 2025.04.30까지'],
                  ['최대예약', '최대 3박 / 2개 까지'],
                  ['기존인원', '기준 2명 (최대 4명)'],
                  ['기준차량', '총 1대 (최대 2대)'],
                  ['인원초과요금', '성인초과 10,000원'],
                  ['차량초과요금', '차량초과 10,000원'],
                  ['캠핑양도', '가능'],
                  ['포인트사용', '가능'],
                  ['매너타임', '시작 22:30 ｜ 종료 08:00'],
                  ['오토캠핑', '입실 14:00 ｜ 퇴실 12:00'],
                  ['카라반', '입실 15:00 ｜ 퇴실 11:00'],
                ].map(([title, detail]) => (
                  <div key={title} className="flex">
                    <h5 className="w-32 font-medium shrink-0">{title}</h5>
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 
            --- 오른쪽 스티키 영역 ---
            5. View.tsx의 오른쪽 영역 구조와 클래스를 그대로 가져오고,
               Reservation 페이지의 내용을 채워 넣었습니다.
          */}
          <div className="product_page_right">
              <div className="sticky_box">
                  <div className="rescheck_sy">

                      {/* 이미지 및 상품명 */}
                      <div className="rescheck_sy1">
                          <img src="//item-team-sosul.vercel.app/img/image/image 2.png" alt="카라반" />
                          <div>
                            <span className="rc_sy1">카라반 1호</span><br />
                            <span className="rc_sy2">성인 2명, 미성년 2인</span>
                          </div>
                      </div>

                      {/* 할인율 및 가격 */}
                      <div className="rescheck_sy2">
                          <div className="roombt_sy2">
                              <div className="saleall_sy">
                                  <span className="sale_sy">20%</span>
                                  <span className="price_sy">64,000원 ~</span>
                              </div>
                          </div>
                      </div>
                      
                      {/* 입실/퇴실 및 인원 정보 */}
                      <div className="rescheck_sy3">
                          <span className="gn_sy2"> 입실 </span><span className="gn_sy3">2025.12.19</span>
                          <span className="gn_sy2">~퇴실</span>
                          <span className="gn_sy3">2025.12.21</span> <br />
                          {/* Reservation 페이지에만 있는 인원 정보 추가 */}
                          <span className="gn_sy2 font-bold">대인 </span><span className="gn_sy3 font-bold">3명</span>
                          <span className="gn_sy2 font-bold ml-2">소인 </span><span className="gn_sy3 font-bold">2명</span>
                      </div>

                      {/* 요금 상세 내역: Reservation 페이지의 내용을 반영하여 여러 줄로 표시 */}
                      <div className="rescheck_sy4"><span>사이트 요금</span><span>64,000원*2</span></div>
                      <div className="rescheck_sy4"><span>인원추가</span><span>10,000원*1</span></div>
                      <div className="rescheck_sy4"><span>차량추가</span><span>0원</span></div>
                      <div className="rescheck_sy4"><span>할인액</span><span className="text-red-500">-32,000원</span></div>

                      {/* 총액 */}
                      <div className="rescheck_sy5">
                          <span>총액</span>
                          <span>138,000원</span>
                      </div>

                      {/* 버튼 */}
                      <button
                          className="mt-4 w-full btn block text-center bg-[#3F422F] text-white py-3 rounded-lg font-bold hover:bg-[#2c2e21] transition-colors"
                          onClick={() => navigate('/pay')}
                      >
                          예약하기
                      </button>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Reservation;