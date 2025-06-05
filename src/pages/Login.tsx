import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import '../scss/login.hyuna.scss';

import { fetchData } from "../lib/api";


//로그인 전용 타입스크립트
type MembersLogin = {
    userid: string;
    password: string;
};

type LoginProps = {
    
    setIsMember: React.Dispatch<React.SetStateAction<boolean>>; // isMember 상태를 업데이트하는 함수
};
  

const Login: React.FC<LoginProps> = ({ setIsMember}) => {
   




  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MembersLogin>();

  const onSubmit = async (data: MembersLogin) => {
    console.log("입력한 로그인 정보:", data); // ✅ 콘솔 출력 1 맞아
    try {
      const { data: result } = await fetchData("members", "select", {
        match: {
          userid: data.userid,
          password: data.password,
        },
      });

      console.log("Supabase 응답 데이터:", result); // ✅ 콘솔 출력 2 전부 오고있어 match 관련 option이 실행되지않았어

      if (result && result.length > 0) {
        console.log("🔐 인증된 사용자:", result[0]); // ✅ 일치한 사용자 정보 이것도 맞아

       
       
        setIsMember(true);
        alert( data.userid+"님 역시 캠핑예약은 소슬!");
        reset();
        window.location.href = "/";

      } else {
        alert("아이디 또는 비밀번호가 올바르지 않습니다.");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div className="ej_content pt-[55px]">
        <h2 className="Login main_tit">로그인</h2>
        <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group basic_txt">
            <input
              type="text"
              className="border border-gray_3"
              placeholder="아이디를 입력하세요."
              {...register("userid", { required: "아이디를 입력하세요." })}
            />
            {errors.userid && <p className="text-red-500">{errors.userid.message}</p>}
          </div>

          <div className="input-group basic_txt">
            
            <input
              type="password"
              className="border border-gray_3"
              placeholder="비밀번호를 입력하세요."
              {...register("password", { required: "비밀번호를 입력하세요." })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <div className="sub0 flex justify-between">
            <label className="inline-flex items-center gap-[5px]">
              <input type="checkbox" name="remember" className="form-checkbox appearance-none" />
              <span>로그인 유지</span>
            </label>
            <Link to="/reset" className="sub2 basic_txt text-gray_3 underline-offset-4">비밀번호 재설정</Link>
          </div>

          <button type="submit" className="login-btn list_tit bg-[#ddd] mt-[50px] hover:bg-sub_apricot hover:text-white">로그인</button>

          <button type="button" className="login-btn list_tit mt-[25px] mb-[40px] flex center items-center justify-center gap-[20px] bg-[#FEE500] text-[#000]">
            <img src="/img/icon/kakao.png" alt="카카오 로그인" />
            카카오로 3초만에 시작하기
          </button>

          <div className="text-center text-gray_3 text-[24px] my-5">또는</div>

          <div className="flex justify-center gap-[40px] my-5">
            <img src="/img/icon/naver.png" alt="네이버" className="w-10 h-10" />
            <img src="/img/icon/google.png" alt="구글" className="w-10 h-10" />
            <img src="/img/icon/Facebook.png" alt="페이스북" className="w-10 h-10" />
            <img src="/img/icon/apple.png" alt="애플" className="w-10 h-10" />
          </div>

          <p className="sub_tit text-gray_3 font-medium my-5">계정이 없으신가요?</p>
          <Link to="/join" className="main_tit text-[#000]">회원가입</Link>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
