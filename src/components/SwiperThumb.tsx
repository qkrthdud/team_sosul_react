import fourswiper from "../data/db.json";

function SwiperThumb() {
  const { main_con_four } = fourswiper;

  return (
    <div className="main_con main_con_four gray5_bg p100">
      <div className="container">
        <div className="tit">
          <div className="point_txt organic d-lg-none">NOW HERE</div>
          <div className="main_tit panBlack">
            당신을 위한 추천
            <br className="d-lg-none" /> 지금 여기
          </div>
          <button className="all-btn point_txt gray3">전체보기</button>
        </div>

        <div className="slider">
          <div className="inner">
            <ul className="swiper-wrapper slide_list">
              {Array.isArray(main_con_four) &&
                main_con_four.map((v, i) => (
                  <li className="swiper-slide" key={v.id || i}>
                    <div className="con_box">
                      <div className="con_img_box">
                        <img
                          src={v.image}
                          alt={v.name}
                          className="con_img"
                        />
                      </div>
                      <button className="btn_like"></button>
                      <div className="con_txt">
                        <div className="location point_txt gray3">
                          {v.location}
                        </div>
                        <div className="camping basic_txt">{v.name}</div>
                        <div className="won sub_txt gray3">
                          {v.originalPrice.toLocaleString()}원
                        </div>
                        <div className="price">
                          <span className="percent list_tit organic">
                            {v.discountRate}%
                          </span>
                          <span className="won2 list_tit panBlack">
                            {v.discountedPrice.toLocaleString()}원 ~
                          </span>
                        </div>
                        <div className="review d-flex">
                          <span className="star sub_txt gray3">★</span>
                          <span className="jum sub_txt gray3">
                            {v.rating}
                          </span>
                          <span className="number sub_txt gray3">
                            ({v.reviewCount})
                          </span>
                        </div>
                        <button className="check_btn sub_txt gray3">
                          예약하기
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="mobile">
            <div className="swiper-pagination same-pagination"></div>
          </div>
          <span className="btn btn_prev same-button-prev"></span>
          <span className="btn btn_next same-button-next"></span>
        </div>

        <button className="mo-all-btn point_txt gray3 d-lg-none">전체보기</button>
      </div>
    </div>
  );
}

export default SwiperThumb;
