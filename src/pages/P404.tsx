import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* 404 이미지 */}
      <div
        className="w-full max-w-md h-80 bg-[url('/img/image/404.png')] bg-no-repeat bg-center bg-contain"
        aria-label="404 Not Found"
        role="img"
      />
      
      {/* 문구 */}
      <h1 className="text-3xl mt-8 text-gray-900">찾을 수 없는 페이지 입니다.</h1>
      <p className="text-gray-600 mt-2 mb-6">
      요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요 &#59; &#125;
      </p>

      {/* 홈으로 돌아가기 버튼 */}
      <button
        onClick={() => navigate('/')}
        className="w-full max-w-md px-10 py-4 border rounded-[20px] border-[#D9D9D9] text-xl font-semibold text-gray-800 active:bg-[#D68B30] active:text-white transition"
        style={{ backgroundColor: 'rgba(217, 217, 217, 0.47)' }}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default NotFoundPage;
