import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reservation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="product_write bg-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-[230px]">
        
        {/* --- 왼쪽 영역 --- */}
        {/* ▼▼▼ 클래스를 flex-1 대신 명시적인 w-2/3로 수정하여 비율을 고정합니다. (개선) ▼▼▼ */}
        <div className="w-full md:w-2/3 p-4 md:p-8">
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
          <section className="mb-8">
            <h3 className="text-xl font-bold mb-4">사이트 선택</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 text-center py-3 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  C{i + 1}
                </div>
              ))}
            </div>
          </section>

          <hr className="my-8" />

          {/* 인원/차량 선택 */}
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">대인</span>
                <select className="border rounded-md px-2 py-1">
                  {[0, 1, 2, 3, 4].map((n) => (<option key={n} value={n}>{n}</option>))}
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
              <div className="flex items-center gap-2">
                <span className="font-semibold">차량</span>
                <select className="border rounded-md px-2 py-1">
                  {[0, 1, 2].map((n) => (<option key={n} value={n}>{n}</option>))}
                </select>
                <span>대</span>
              </div>
              <div className="text-sm text-gray-600">기준차량: 최대 2대</div>
            </div>
          </section>

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

          {/* 
            ▼▼▼▼▼ 원래 이 위치에 </div> 태그가 있어서 문제가 발생했습니다. 해당 태그를 아래로 옮겼습니다. ▼▼▼▼▼ 
          */}
	          
          {/* 이용안내 */}
          <div className="mt-12 mb-8"> {/* 위와 간격을 주기 위해 mt-12 추가 */}
            <h4 className="text-lg font-semibold mb-4">이용안내</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4"> {/* 모바일 화면을 위해 grid-cols-1 추가 */}
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
                  <h5 className="w-32 font-medium shrink-0">{title}</h5> {/* shrink-0 추가 */}
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div> {/* ▼▼▼▼▼ 왼쪽 영역 전체를 감싸는 div가 여기서 닫혀야 합니다. ▼▼▼▼▼ */}


        {/* --- 오른쪽 스티키 영역 (수정 없음) --- */}
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
                    <button
                        onClick={() => navigate('/pay')}
                        className="block w-full text-center bg-[#3F422F] text-white py-3 rounded-lg font-bold hover:bg-[#2c2e21] transition-colors"
                    >
                        결제하기
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Reservation;