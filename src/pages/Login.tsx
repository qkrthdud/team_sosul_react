import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import '../scss/login.hyuna.scss';


const Login: React.FC = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <div>
            <div className="ej_content pt-[55px]" >
                <h2 className="Login main_tit">로그인</h2>
                <div className="login">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-group basic_txt ">
                                <input className="border border-gray_3"
                                    type="text"
                                    id="user_id"
                                    {...register("user_id", { required: "아이디를 입력하세요." })}
                                    placeholder="아이디를 입력하세요."
                                />
                            </div>
                            <div className="input-group basic_txt">
                                <input className="border border-gray_3"
                                    type="password"
                                    id="pw"
                                    {...register("password", { required: "비밀번호를 입력하세요." })}
                                    placeholder="비밀번호를 입력하세요."
                                />
                            </div>
                            <div className="sub0 flex justify-between" >   
                                <label className="inline-flex items-center gap-[5px]">
                                    <input type="checkbox" name="remember" className="form-checkbox appearance-none"/>
                                    <span>로그인 유지</span>
                                </label>
                                <Link to="/reset" className="sub2 basic_txt text-gray_3 underline-offset-4">비밀번호 재설정</Link>
                            </div>
                            <button type="submit" className="login-btn list_tit bg-[#ddd] hover:bg-sub_apricot hover:text-white">로그인</button>
                            <button type="submit" className="login-btn list_tit my-[40px] flex center items-center justify-center gap-[20px] bg-[#FEE500] text-[#000]">
                                <img src="/img/icon/kakao.png" alt="" className=""/>
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