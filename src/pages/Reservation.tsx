import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reservation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="product_write">
      <div className="flex container mx-auto">
        {/* LEFT */}
        <div className="flex-1">
          {/* 예약하기 상단 */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
            <h3 className="text-xl font-semibold">예약하기 및 결제</h3>
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

          {/* 인원/차량 선택 */}
          <div className="border-b border-gray-300 pb-4 mb-6 space-y-4">
            {/* 대/소인 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 syre_container">
                <span className="font-medium">대인</span>
                <select className="border rounded px-2 py-1">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                <span>명</span>
                <span className="font-medium ml-4">소인</span>
                <select className="border rounded px-2 py-1">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                <span>명</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-5" /* svg attrs */> {/* ... */} </svg>
                <span>가능인원: 최대 4명</span>
              </div>
            </div>

            {/* 차량 */}
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
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-5" /* svg attrs */> {/* ... */} </svg>
                <span>기준차량: 최대 2대</span>
              </div>
            </div>
          </div>

          {/* 추가선택 */}
          <div className="border-b border-gray-300 pb-4 mb-6">
            <h2 className="text-2xl font-bold mb-4">추가선택</h2>
            {['장작', '난로', '숯불'].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-2">
                <span>{item}</span>
                <div className="flex items-center border rounded">
                  <button className="px-3 py-1">
                    <svg className="w-3 h-3"> {/* minus */} </svg>
                  </button>
                  <span className="px-3">0</span>
                  <button className="px-3 py-1">
                    <svg className="w-3 h-3"> {/* plus */} </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 이용안내 */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">이용안내</h4>
            <div className="grid grid-cols-2 gap-y-4">
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
                  <h5 className="w-32 font-medium">{title}</h5>
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-80 ml-6 sticky top-10">
          <div className="border p-4 rounded shadow">
            <div className="flex items-center mb-4">
              <img className="w-20 h-20 rounded" src="//item-team-sosul.vercel.app/img/image/image 2.png" alt="" />
              <div className="ml-4">
                <p className="font-semibold">카라반 1호</p>
                <p className="text-sm text-gray-600">성인 2명, 미성년 2인</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center bg-yellow-100 p-2 rounded">
                <span className="text-red-500 font-bold">20%</span>
                <span className="font-semibold">64,000원 ~</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>입실</span><span>2025.12.19</span></div>
              <div className="flex justify-between"><span>퇴실</span><span>2025.12.21</span></div>
              <div className="flex justify-between"><span>대인</span><span>3명</span></div>
              <div className="flex justify-between"><span>소인</span><span>2명</span></div>
              <div className="flex justify-between"><span>사이트 요금</span><span>64,000원*2</span></div>
              <div className="flex justify-between"><span>인원추가</span><span>10,000원*1</span></div>
              <div className="flex justify-between"><span>차량추가</span><span>0원</span></div>
              <div className="flex justify-between"><span>할인액</span><span>-32,000원</span></div>
              <div className="flex justify-between font-bold"><span>총액</span><span>138,000원</span></div>
            </div>
            <button
              onClick={() => navigate('/pay')} // onClick 이벤트에 navigate 함수를 연결
              className="mt-4 w-full btn block w-full text-center bg-[#3F422F] text-white py-3 rounded-lg font-bold hover:bg-[#2c2e21] transition-colors"
            >
              결제하기
            </button>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;