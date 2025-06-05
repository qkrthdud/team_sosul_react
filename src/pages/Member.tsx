import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { Members } from '../types/common';
import { fetchData } from "../lib/api"; // fetchData 함수 import




const Member: React.FC = () => {
    const [showRegions, setShowRegions] = useState(false); 
    const [isRegistered, setIsRegistered] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Members>();

    
    const onSubmit = async (data: Members) => {
        try {
            const result = await fetchData("members", "insert", {
                data,
            });

            console.log("회원가입 성공:", result);
            alert("회원가입 성공!");
            setUsername(data.username);
            reset();
            setIsRegistered(true)
        } catch (error) {
            console.error("회원가입 실패:", error);
            alert("회원가입에 실패했습니다.");
        }
    };

   

    return (
        <>
           {
            !isRegistered ?  <div className="ej_content pt-[80px]">

            <div className="JOIN">
                <h2 className="JOIN-title list_tit">회원정보입력</h2>
                <p className="basic_txt">가입을 위해 정보를 입력해 주세요.</p>
            <div className="Join basic_txt">
                <form onSubmit={handleSubmit(onSubmit)}>
 
                    <label htmlFor="userid">아이디<span>*</span></label>
                    <input
                        type="text"
                        id="userid"
                        placeholder="아이디를 입력하세요."
                        {...register("userid", { required: "아이디를 입력하세요." })}
                    />
                    {errors.userid && <p className="error">{errors.userid.message}</p>}

                    <label htmlFor="password">비밀번호<span>*</span></label>
                    <input
                        type="password"
                        id="password"
                        placeholder="비밀번호를 입력하세요."
                        {...register("password", { required: "비밀번호를 입력하세요." })}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}

                       
                    <label htmlFor="confirm_password">비밀번호재입력<span>*</span></label>
                    <input type="password" name="confirm_password" id="confirm_password" placeholder="비밀번호를 재입력 하세요." required />
       
                    <label htmlFor="name">이름<span>*</span></label>
                    <input type="text" {...register("username", { required: "성함을 입력하세요." })} placeholder="이름을 입력하세요." required />

                    <label htmlFor="email">이메일<span>*</span></label>
                    <input
                        type="email"
                        id="email"
                        placeholder="abc@sosul.com"
                        {...register("email", {
                            required: "이메일을 입력하세요.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "유효한 이메일을 입력하세요.",
                            },
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
        
        
                    <label htmlFor="birth">생년월일<span>*</span></label>
                    <div className="birth">
                        <select
                            {...register("birth_year", { required: "년도를 선택하세요." })}
                            id="year"
                        >
                            <option value="">년</option>
                            {Array.from({ length: 100 }, (_, i) => 1925 + i).map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                        {errors.birth_year && <p className="error">{errors.birth_year.message}</p>}

                        <select
                            {...register("birth_month", { required: "월을 선택하세요." })}
                            id="month"
                        >
                            <option value="">월</option>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                        {errors.birth_month && <p className="error">{errors.birth_month.message}</p>}

                        <select
                            {...register("birth_day", { required: "일을 선택하세요." })}
                            id="day"
                        >
                            <option value="">일</option>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                                <option key={day} value={day}>
                                    {day}
                                </option>
                            ))}
                        </select>
                        {errors.birth_day && <p className="error">{errors.birth_day.message}</p>}
                    </div>

                    <label htmlFor="phone">휴대폰 번호<span>*</span></label>
                    <div className="phone">
                        <input
                            type="tel"
                            {...register("phone1", {
                                required: "휴대폰 번호를 입력하세요.",
                                pattern: { value: /^\d{2,3}$/, message: "유효한 번호를 입력하세요." },
                            })}
                            maxLength={3}
                            placeholder="010"
                        />
                        {errors.phone1 && <p className="error">{errors.phone1.message}</p>}
                        <span>-</span>
                        <input
                            type="tel"
                            {...register("phone2", {
                                required: "휴대폰 번호를 입력하세요.",
                                pattern: { value: /^\d{3,4}$/, message: "유효한 번호를 입력하세요." },
                            })}
                            maxLength={4}
                            placeholder="1234"
                        />
                        {errors.phone2 && <p className="error">{errors.phone2.message}</p>}
                        <span>-</span>
                        <input
                            type="tel"
                            {...register("phone3", {
                                required: "휴대폰 번호를 입력하세요.",
                                pattern: { value: /^\d{4}$/, message: "유효한 번호를 입력하세요." },
                            })}
                            maxLength={4}
                            placeholder="5678"
                        />
                        {errors.phone3 && <p className="error">{errors.phone3.message}</p>}
                    </div>

                    <label>성별</label>
                    <div className="gender">
                        <input
                            type="radio"
                            id="male"
                            style={{ display: "none" }}
                            {...register("gender", { required: "성별을 선택하세요." })}
                            value="male"
                        />
                        <label htmlFor="male" className="gender-label">남성</label>
                        <input
                            type="radio"
                            id="female"
                            style={{ display: "none" }}
                            {...register("gender", { required: "성별을 선택하세요." })}
                            value="female"
                        />
                        <label htmlFor="female" className="gender-label">여성</label>
                    </div>
                    {errors.gender && <p className="error">{errors.gender.message}</p>}

                    <div className="region-toggle-wrapper container">
                        <button
                            type="button"
                            onClick={() => setShowRegions(!showRegions)}
                            className="toggle-region-btn"
                        >
                            선호 지역
                        </button>

                        {showRegions && (
                            <div className="region">
                                {[
                                    "서울", "인천", "부산", "대구", "울산", "대전", "광주", "세종", 
                                    "강원", "경기", "충북", "충남", "경북", "경남", "전북", "전남", "제주"
                                ].map((region) => (
                                    <div key={region}>
                                        <input
                                            type="checkbox"
                                            id={region}
                                            value={region}
                                            {...register("preferred_regions")}
                                        />
                                        <label htmlFor={region}>{region}</label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="agreements">
                            {/* <input type="checkbox" id="agree-all" required /><label htmlFor="agree-all">약관 모두 동의</label>
                            <input type="checkbox" id="age-confirm" required /><label htmlFor="age-confirm">만 14세 이상입니다.<span className="required">(필수)</span></label>
                            <input type="checkbox" id="tos" required /><label htmlFor="tos">소슬 약관 동의<span className="required">(필수)</span></label> */}
                            <input
                                type="checkbox"
                                id="marketing"
                                {...register("marketing")}
                            />
                            <label htmlFor="marketing">이벤트/마케팅 수신 동의 (선택)</label>
                    </div>
                    <button type="submit" className="join-btn">신규회원가입</button>
                </form>
            </div>
        </div>
    </div> : 
    
    
    <div>
        <h2>{isRegistered && <span>{username}</span>}님!의 가입을 축하드립니다, </h2>
    </div>


           }
        </>
       
    );
};

export default Member;