import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


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
                                            <div className="input-group basic_txt">
                                                <input
                                                    type="text"
                                                    id="user_id"
                                                    {...register("user_id", { required: "아이디를 입력하세요." })}
                                                    placeholder="아이디를 입력하세요."
                                                />
                                            </div>
                                            <div className="input-group basic_txt">
                                                <input
                                                    type="password"
                                                    id="pw"
                                                    {...register("password", { required: "비밀번호를 입력하세요." })}
                                                    placeholder="비밀번호를 입력하세요."
                                                />
                                            </div>
                                            <div className="sub0">   
                                                <p className="sub1 basic_txt"><a href="#">로그인 유지</a></p><p>
                                                </p><p className="sub2 basic_txt"><a href="#">비밀번호 재설정</a></p><p>
                                            </p></div>
                                            <button type="submit" className="login-btn list_tit">로그인</button>
                                            <p className="basic_txt">계정이 없으신가요?</p>
                                            <p className="main_tit"><Link to="/join">회원가입</Link></p>
                                        </form>
                                    
                      

           
                </div>
            </div>
        </div>
    );
};

export default Login;