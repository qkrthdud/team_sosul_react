import React from 'react';
import { useNavigate } from 'react-router-dom';

// 컴포넌트 이름을 요청하신 대로 ReservationForm으로 유지합니다.
export default function ReservationForm() {
  const navigate = useNavigate();

  return (
    // 1. Reservation.tsx와 동일한, 검증된 최상위 레이아웃 구조를 사용합니다.
    <div className="ej_content mt-[-30px]">
      <div className="product_view">
        <div className="container mx-auto flex flex-col md:flex-row product_page_box">
        
          {/* --- 왼쪽 영역 --- */}
          {/* 2. 'product_page_left' 클래스로 왼쪽 영역을 감싸고, 내용은 결제 폼으로 채웁니다. */}
          {/* 너비 문제를 해결하기 위해 Tailwind CSS 클래스를 명시적으로 추가합니다. */}
          <div className="product_page_left w-full md:w-2/3">
            
            {/* 예약자 정보 */}
            <section className="mb-6 border-b pb-6">
              <h2 className="text-xl font-bold mb-4">결제하기</h2>
              <h3 className="text-lg font-semibold mb-2">예약자 정보</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-medium">예약자 이름</label>
                  <input id="name" type="text" placeholder="홍길동" className="w-full p-2 border rounded-md input" />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-medium">휴대폰 번호</label>
                  <div className="flex gap-2">
                    <input id="phone" type="tel" placeholder="010-1234-5678" className="w-full p-2 border rounded-md input flex-1" />
                    <button type="button" className="px-4 py-2 bg-gray-200 rounded-md btn">인증 번호 받기</button>
                  </div>
                </div>
                <div>
                  <label htmlFor="request" className="block font-medium">요청사항</label>
                  <input id="request" type="text" placeholder="요청사항을 입력하세요." className="w-full p-2 border rounded-md input" />
                </div>
                <div>
                  <span className="block font-medium mb-2">방문 수단 선택</span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1 cursor-pointer mb-2">
                      <input type="radio" name="visit-method" value="walk" />
                      도보
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer mb-2">
                      <input type="radio" name="visit-method" value="car" />
                      차량
                    </label>
                  </div>
                  <div>
                    <label htmlFor="car-number" className="block font-medium">차량번호</label>
                    <input id="car-number" type="text" placeholder="123가 4567" className="w-full p-2 border rounded-md input" />
                  </div>
                </div>
              </form>
            </section>

            {/* 결제수단 */}
            <section className="mb-6 border-b pb-6">
              <h3 className="text-lg font-semibold mb-4">결제수단</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['카카오페이', '네이버페이', '토스페이', 'KB Pay', 'PAYCO', '카드', '무통장입금', '휴대폰'].map((label) => (
                  <label key={label} className="payment-button border rounded-md text-center py-3 cursor-pointer hover:bg-gray-100 transition-colors">
                    <input type="radio" name="payment" className="hidden" />
                    {label}
                  </label>
                ))}
              </div>
              <div className="mt-4">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  이 결제 수단을 다음에도 사용
                </label>
              </div>
            </section>

            {/* 환불규정 */}
            <section className="mb-6 border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">환불규정</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>인원/차량 초과 요금 및 추가 선택 요금은 100% 환불됩니다.</li>
                <li>할인 전 기본 숙박요금을 기준으로 환불규정이 적용됩니다.</li>
                <li>입금(결제)후 24시간 이내 취소 시 전액 환불됩니다.</li>
              </ul>
            </section>

            {/* 전체동의 */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">전체동의</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" id="agree_all" />
                  전체동의 [선택 포함]
                </label>
                <hr className="my-2" />
                {[
                  '[필수] 만 14세 이상 이용 동의',
                  '[필수] 이용규칙',
                  '[필수] 취소 및 환불 규칙',
                  '[선택] 이벤트, 혜택 정보 수신 동의',
                  '[선택] 개인정보 수집 및 이용 동의',
                  '개인정보 제 3자 제공 안내',
                ].map((text, index) => (
                  <label key={index} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" />
                    {text}
                  </label>
                ))}
              </div>
            </section>
          </div>


          {/* --- 오른쪽 스티키 영역 --- */}
          {/* 3. Reservation.tsx와 동일한 오른쪽 영역 구조('product_page_right')를 사용합니다. */}
          {/* 너비 문제를 해결하기 위해 Tailwind CSS 클래스를 명시적으로 추가합니다. */}
          <div className="product_page_right w-full md:w-1/3">
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
                          <span className="gn_sy2 font-bold">대인 </span><span className="gn_sy3 font-bold">3명</span>
                          <span className="gn_sy2 font-bold ml-2">소인 </span><span className="gn_sy3 font-bold">2명</span>
                      </div>

                      {/* 요금 상세 내역 */}
                      <div className="rescheck_sy4"><span>사이트 요금</span><span>64,000원*2</span></div>
                      <div className="rescheck_sy4"><span>인원추가</span><span>10,000원*1</span></div>
                      <div className="rescheck_sy4"><span>차량추가</span><span>0원</span></div>
                      <div className="rescheck_sy4"><span>할인액</span><span className="text-red-500">-32,000원</span></div>

                      {/* 총액 */}
                      <div className="rescheck_sy5">
                          <span>총액</span>
                          <span>138,000원</span>
                      </div>

                      {/* 버튼: "결제완료" 텍스트와 올바른 navigate 경로 적용 */}
                      <button
                          className="mt-4 w-full btn block text-center bg-[#3F422F] text-white py-3 rounded-lg font-bold hover:bg-[#2c2e21] transition-colors"
                          onClick={() => navigate('/confirmation')}
                      >
                          결제완료
                      </button>
                  </div>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}