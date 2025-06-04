import React from 'react';
import '../scss/confirmation.hyuna.scss'

const Confirmation: React.FC = () => {
    return (
        <div className="confirmation mx-auto">
            {/* 헤더 */}
            <div className="border-b py-[20px] px-[5px] flex justify-between">
                <h2 className="text-xl font-bold">예약확인 및 완료</h2>
                <div className="flex">
                    <a href="tel:01012341234"><img src="//item-team-sosul.vercel.app/img/icon/detail_call.svg" alt="전화하기"/></a>
                    <a className="btn_like"></a>
                    <a href=""><img src="//item-team-sosul.vercel.app/img/icon/detail_share.svg" alt="공유하기"/></a>
                </div>
            </div>

            <div className="flex flex-col gap-[30px]">
                {/* 캠핑장 정보 */}
                <div className="flex py-[20px]">
                    <img
                    src="/images/camping.jpg"
                    alt="여주 블루마린캠핑장"
                    className="w-40 h-28 object-cover rounded-md"
                    />
                    <div className="">
                        <h3 className="text-lg font-semibold">여주 블루마린캠핑장</h3>
                        <p className="flex">
                            <img src="//item-team-sosul.vercel.app/img/icon/detail_place.svg" alt="위치"/>
                            경기도여주시상거동명품로256-74
                        </p>
                    </div>
                </div>

                {/* 일정 */}
                <div className="flex">
                    <h5 className="h5t">일정</h5>
                    <p className="fp1">2025.12.19 (목) 16:00 ~ 2025.12.21 (토) 11:00 / 2박</p>
                </div>

                {/* 사이트 */}
                <div className="flex">
                    <h5 className="h5t">사이트</h5>
                    <p className="fp1">카라반 1호 / 기준2명 최대4명</p>
                </div>
            </div>

            {/* 예약 정보 */}
            <div className="flex flex-col gap-[30px] py-[20px]">
                <p className="list_tit font-[800]">예약 정보</p>
                <div className="flex">
                    <h5 className="h5t">예약자이름: </h5>
                    <p className="fp1">홍길동</p>
                </div>
                <div className="flex">
                    <h5 className="h5t">휴대폰번호: </h5>
                    <p className="fp1">010-1234-4567</p>
                </div>
            </div>

            {/* 결제 정보 */}
            <div className="flex flex-col gap-[30px] py-[20px]">
                <p className="list_tit font-[800]">결제 정보</p>
                <div className="flex">
                    <h5 className="h5t">결제 수단: </h5>
                    <p className="fp1">카카오페이</p>
                </div>
                <div className="flex">
                    <h5 className="h5t">상품 금액: </h5>
                    <p className="fp1">162,000</p>
                </div>
                <div className="flex">
                    <h5 className="h5t">할인 금액: </h5>
                    <p className="fp1">-32,000</p>
                </div>
                <div className="flex">
                    <h5 className="h5t">총 결제 금액: </h5>
                    <p className="fp1">138,000</p>
                </div>
            </div>

            {/* 완료 메시지 */}
            <div className="text-center font-bold text-lg mb-6">
                예약이 완료 되었습니다
            </div>

            {/* 버튼 */}
            <div className="flex gap-4 justify-center">
                <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">영수증 조회하기</button>
                <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">예약취소하기</button>
            </div>
        </div>
  );
};

export default Confirmation;