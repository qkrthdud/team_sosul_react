// src/components/Title.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. 페이지 이동을 위해 useNavigate를 import 합니다.
import Button from './Button';

interface DataObj {
    tit:string;
    btnshow: boolean;
    txtalign: string;
}
interface TitleProps {
    dataobj: DataObj;
}

const Title: React.FC<TitleProps> = ({ dataobj }) => {
    // 2. navigate 함수를 만듭니다.
    const navigate = useNavigate();

    // 3. 버튼을 클릭했을 때 실행할 함수를 정의합니다.
    const handleViewAllClick = () => {
        // "전체보기"는 모든 상품을 보여주는 목록 페이지로 이동하는 것이 일반적입니다.
        // 예를 들어 '/product/list' 라는 경로로 이동하게 합니다.
        // (App.tsx에 <Route path="/product/list" element={<ProductListPage />} /> 와 같은 라우트가 설정되어 있어야 합니다.)
        navigate('/product/list');

        // --- 만약 꼭! /reservation/:id 로 보내야 한다면 ---
        // 아래 코드처럼 특정 ID를 직접 지정해야 합니다. 하지만 이는 아마 원하시는 기능이 아닐 겁니다.
        // navigate('/reservation/1'); // 예시: 1번 상품의 예약 페이지로 이동
    };

    return (
        <div className="tit">
            <div className={`main_tit panBlack ${dataobj.txtalign}`}>
                <div dangerouslySetInnerHTML={{ __html: dataobj.tit }} />
            </div>
            {
                dataobj.btnshow &&
                <Button
                    // 4. Button 컴포넌트에 onClick 속성을 추가하고, 위에서 만든 함수를 연결해줍니다.
                    onClick={handleViewAllClick}
                    btdataobj={{
                        tit: "전체보기",
                        position: "",
                        hv: { bg: "string", color: "string" },
                        br: "string",
                        color: "string"
                    }}
                >
                    전체보기
                </Button>
            }
        </div>
    );
};

export default Title;