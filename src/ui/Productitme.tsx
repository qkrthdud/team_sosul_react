
import { Link } from "react-router-dom";
import React from "react";
import { Campground } from "../types/common";

interface ProductItemProps {
    fatchdata: Campground; // Campground 타입으로 변경
}

const Productitme: React.FC<ProductItemProps> = ({ fatchdata }) => {
    return (
        <div className="con_box">
            <Link to={`/product/view/${fatchdata.id}`} className="con_img_box">
                <img
                    src={ fatchdata.main_photo_url || "//item-team-sosul.vercel.app/img/image/image1.jpg" }
                    alt={fatchdata.campground_name || "캠핑장 이름"}
                    className="con_img"
                />
            </Link>
            <button className="btn_like"></button>
            <div className="con_txt">
                <div className="location point_txt gray3">지역</div>
                <Link to={`/product/view/${fatchdata.id}`} className="camping basic_txt">
                    {fatchdata.campground_name || "캠핑장 이름"}
                </Link>
                <div className="won sub_txt gray3">
                    {fatchdata.price ? `${fatchdata.price.toLocaleString()}원` : "가격 정보 없음"}
                </div>
                <div className="price">
                    {fatchdata.discount_rate && (
                        <span className="percent list_tit organic">
                            {fatchdata.discount_rate}%
                        </span>
                    )}
                    {fatchdata.discount_rate && (
                        <span className="won2 list_tit panBlack">
                            {(fatchdata.price - (fatchdata.price * (fatchdata.discount_rate / 100))).toLocaleString()}원 ~
                        </span>
                    )}
                </div>
                <div className="review d-flex">
                    <span className="star sub_txt gray3">★</span>
                    <span className="jum sub_txt gray3">
                        0.0
                    </span>
                    <span className="number sub_txt gray3">
                        (0)
                    </span>
                </div>
                <Link to={`/reservation/${fatchdata.id}`} className="check_btn sub_txt gray3">
                    예약하기
                </Link>
            </div>
        </div>
    );
};



export default Productitme;