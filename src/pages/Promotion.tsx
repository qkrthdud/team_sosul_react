import React from 'react';

const Promotion: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4">
          <div
            className="w-full max-w-4xl h-80 bg-[url('/img/image/comingsoon.jpg')] bg-no-repeat bg-center bg-contain"
            aria-label="commingsoon"
            role="img"
          />
          
          {/* 문구 */}
          <h1 className="text-3xl mt-8 text-gray-900 font-bold">오픈 준비중</h1>

        </div>
      );
    };

export default Promotion;