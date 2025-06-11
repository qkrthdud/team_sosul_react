// components/ReservationForm.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReservationForm() {
  const navigate = useNavigate();

  return (
    <div className="product_write">
      <div className="container flex flex-col md:flex-row">
        {/* 좌측 영역 */}
        <div className="md:w-2/3 p-4">
          {/* 예약자 정보 */}
          <section className="mb-6 border-b pb-6">
            <h2 className="text-xl font-bold mb-4">결제하기</h2>
            <h3 className="text-lg font-semibold mb-2">예약자 정보</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium">예약자 이름</label>
                <input id="name" type="text" placeholder="홍길동" className="input" />
              </div>
              <div>
                <label htmlFor="phone" className="block font-medium">휴대폰 번호</label>
                <div className="flex gap-2">
                  <input id="phone" type="tel" placeholder="010-1234-5678" className="input flex-1" />
                  <button type="button" className="btn">인증 번호 받기</button>
                </div>
              </div>
              <div>
                <label htmlFor="car-number" className="block font-medium">차량번호</label>
                <input id="car-number" type="text" placeholder="123가 4567" className="input" />
              </div>
              <div>
                <label htmlFor="request" className="block font-medium">요청사항</label>
                <input id="request" type="text" placeholder="요청사항을 입력하세요." className="input" />
              </div>
              <div>
                <span className="block font-medium mb-2">방문 수단 선택</span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="visit-method" value="walk" />
                    도보
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="visit-method" value="car" />
                    차량
                  </label>
                </div>
              </div>
            </form>
          </section>

          {/* 결제수단 */}
          <section className="mb-6 border-b pb-6">
            <h3 className="text-lg font-semibold mb-4">결제수단</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['카카오페이', '네이버페이', '토스페이', 'KB Pay', 'PAYCO', '카드', '무통장입금', '휴대폰'].map((label) => (
                <label key={label} className="payment-button">
                  <input type="radio" name="payment" className="hidden" />
                  {label}
                </label>
              ))}
            </div>
            <div className="mt-4">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" />
                이 결제 수단을 다음에도 사용
              </label>
            </div>
          </section>

          {/* 환불 규정 */}
          <section className="mb-6 border-b pb-6">
            <h3 className="text-lg font-semibold mb-2">환불규정</h3>
            <ul className="list-disc pl-5 text-sm">
              <li>인원/차량 초과 요금 및 추가 선택 요금은 100% 환불됩니다.</li>
              <li>할인 전 기본 숙박요금을 기준으로 환불규정이 적용됩니다.</li>
              <li>입금(결제)후 24시간 이내 취소 시 전액 환불됩니다.</li>
            </ul>
          </section>

          {/* 전체 동의 */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">전체동의</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" id="agree_all" />
                전체동의 [선택 포함]
              </label>
              {[
                '[필수] 만 14세 이상 이용 동의',
                '[필수] 이용규칙',
                '[필수] 취소 및 환불 규칙',
                '[선택] 이벤트, 혜택 정보 수신 동의',
                '[선택] 개인정보 수집 및 이용 동의',
                '개인정보 제 3자 제공 안내',
              ].map((text, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {text}
                </label>
              ))}
            </div>
          </section>
        </div>

        {/* 우측 슬라이드 */}
        <div className="md:w-1/3 p-4">
          <div className="sticky top-20 border rounded p-4 bg-white shadow">
            <div className="flex items-center gap-4 mb-4">
              <img src="//item-team-sosul.vercel.app/img/image/image 2.png" alt="카라반" className="w-20 h-20 object-cover" />
              <div>
                <div className="font-bold">카라반 1호</div>
                <div className="text-sm text-gray-600">성인 2명, 미성년 2인</div>
              </div>
            </div>
            <div className="mb-2 text-right font-semibold">
              <span className="text-red-500">20%</span> <span>64,000원 ~</span>
            </div>
            <div className="mb-2">
              입실 <span className="font-bold">2025.12.19</span> ~ 퇴실 <span className="font-bold">2025.12.21</span>
            </div>
            <div className="mb-2">
              대인 <span className="font-bold">3명</span> / 소인 <span className="font-bold">2명</span>
            </div>
            <ul className="text-sm border-t pt-2 space-y-1">
              <li className="flex justify-between"><span>사이트 요금</span><span>64,000원 x 2</span></li>
              <li className="flex justify-between"><span>인원추가</span><span>10,000원 x 1</span></li>
              <li className="flex justify-between"><span>차량추가</span><span>0원</span></li>
              <li className="flex justify-between"><span>할인액</span><span className="text-red-500">-32,000원</span></li>
              <li className="flex justify-between font-bold text-lg"><span>총액</span><span>138,000원</span></li>
            </ul>
            <button
              className="mt-4 w-full btn block w-full text-center bg-[#3F422F] text-white py-3 rounded-lg font-bold hover:bg-[#2c2e21] transition-colors"
              onClick={() => navigate('/confirmation')}
            >
              결제완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
