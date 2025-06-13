import React from 'react';
import { useNavigate } from 'react-router-dom';

// 컴포넌트 이름을 요청하신 대로 ReservationForm으로 유지합니다.
export default function ReservationForm() {
  const navigate = useNavigate();

  return (
    // 전체 배경 및 기본 구조는 유지합니다.
    <div className="product_write bg-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-[230px]">
        
        {/* --- 왼쪽 영역 --- */}
        {/* ▼▼▼ 이 부분의 내용을 '결제하기' 관련 섹션으로 교체했습니다. ▼▼▼ */}
        <div className="w-full md:w-2/3 p-4 md:p-8">
          
          {/* 예약자 정보 */}
          <section className="mb-6 border-b pb-6">
            <h2 className="text-xl font-bold mb-4">결제하기</h2>
            <h3 className="text-lg font-semibold mb-2">예약자 정보</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium">예약자 이름</label>
                {/* CSS 클래스를 일관성 있게 input-bordered 와 같은 유틸리티 클래스로 변경하거나, 
                    기존 CSS에 정의된 'input' 클래스를 그대로 사용합니다. 여기서는 'input'을 유지합니다. */}
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
            {/* 'payment-button' 클래스가 정의되어 있다고 가정하고 사용합니다. */}
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
        {/* ▼▼▼ 이 영역의 레이아웃과 내용은 그대로 유지하되, 버튼만 수정했습니다. ▼▼▼ */}
        <div className="w-full md:w-1/3 p-4 md:pl-0 md:pt-8">
            <div className="sticky top-[4.5rem]">
                <div className="border bg-white rounded-lg p-5 shadow-sm space-y-4">
                    {/* (내용 동일) */}
                    <div className="flex items-center gap-4">
                        <img src="//item-team-sosul.vercel.app/img/image/image 2.png" alt="카라반" className="w-16 h-16 rounded-md object-cover" />
                        <div>
                            <p className="font-bold text-base">카라반 1호</p>
                            <p className="text-xs text-gray-500">성인 2명, 미성년 2인</p>
                        </div>
                    </div>
                    <div className="text-xl font-bold">
                        <span className="text-yellow-500 mr-2">20%</span>
                        <span>64,000원 ~</span>
                    </div>
                    <div className="text-sm space-y-1">
                        <p>
                            <span className="text-gray-600">입실</span> 2025.12.19
                            <span className="mx-2">~</span>
                            <span className="text-gray-600">퇴실</span> 2025.12.21
                        </p>
                        <p>
                            <span className="font-bold">대인</span> 3명
                            <span className="ml-2 font-bold">소인</span> 2명
                        </p>
                    </div>
                    <div className="space-y-2 pt-4">
                        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                            <span className="text-sm text-gray-800">사이트 요금</span>
                            <span className="text-sm font-semibold">64,000원*2</span>
                        </div>
                        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                            <span className="text-sm text-gray-800">인원추가</span>
                            <span className="text-sm font-semibold">10,000원*1</span>
                        </div>
                        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                            <span className="text-sm text-gray-800">차량추가</span>
                            <span className="text-sm font-semibold">0원</span>
                        </div>
                         <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                            <span className="text-sm text-gray-800">할인액</span>
                            <span className="text-sm font-semibold text-red-500">-32,000원</span>
                        </div>
                        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md mt-2">
                            <span className="text-base font-bold">총액</span>
                            <span className="text-xl font-bold">138,000원</span>
                        </div>
                    </div>
                    {/* 버튼의 onClick 핸들러와 텍스트를 수정했습니다. */}
                    <button
                        className="mt-4 w-full block text-center bg-[#3F422F] text-white py-3 rounded-lg font-bold hover:bg-[#2c2e21] transition-colors"
                        onClick={() => navigate('/confirmation')}
                    >
                        결제완료
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}