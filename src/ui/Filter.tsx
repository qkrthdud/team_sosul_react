

const Filter = () =>{
    return (
        <div className="filter_box">
            <a href="" className="d-flex filter_icon filter_btn">
                <span>필터</span>
            </a>
            <a href="" className="filter_btn">추천순</a>
            <a href="" className="filter_btn">최신순</a>
            <a href="" className="filter_btn">가까운순</a>
            <a href="" className="d-flex reset_icon filter_btn">
            </a>
            <div className="filter_option">
                <div className="filter_option_top">
                    필터
                    <a className="reset">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="39" rx="4.5" stroke="#DDDDDD"></rect>
                            <path d="M25.3713 13.647L25.6179 16.7449" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                            <path d="M25.618 16.7451L22.5308 16.4878" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                            <path d="M26.6149 19.5644C26.9044 21.5368 26.2934 23.6057 24.7712 25.1278C22.2199 27.6791 18.0929 27.6791 15.5524 25.1278C13.0118 22.5766 13.0118 18.4496 15.5524 15.8983C18.0929 13.3471 22.2307 13.3471 24.7712 15.8983L25.2643 16.3914" stroke="#3F422F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                        </svg>
                    </a>
                </div>
                <div className="filter_option_btm">
                    <div className="filter_area">
                        <div className="filter_stit">가격범위</div>
                        <div className="middle">
                            <div className="multi-range-slider">
                                {/* <!-- 진짜 슬라이더 --> */}
                                <input type="range" id="input-left" min="0" max="100" value="25" />
                                <input type="range" id="input-right" min="0" max="100" value="75" />

                                {/* <!-- 커스텀 슬라이더 --> */}
                                <div className="slider">
                                <div className="track"></div>
                                <div className="range"></div>
                                <div className="thumb left"></div>
                                <div className="thumb right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex filter_area">
                        <div className="filter_input">
                            <div className="filter_stit">최대가격</div>
                            <div className="same_box d-flex">
                                <input type="text" placeholder="0" />
                                <span>원</span>
                            </div>
                        </div>
                        <div className="filter_input">
                            <div className="filter_stit">최대가격</div>
                            <div className="same_box d-flex">
                                <input type="text" placeholder="0" />
                                <span>원</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex filter_area">
                        <div className="filter_stit">편의시설</div>
                        <div>
                            <div>
                                
                                <label htmlFor="store1">아침식사</label>
                                <input type="checkbox" name="store" id="store1" />
                            </div>
                            <div>
                                <label htmlFor="store2">저녁식사</label>
                                <input type="checkbox" name="store" id="store2" />
                            </div>
                            <div>
                                <label htmlFor="store3">수영장</label>
                                <input type="checkbox" name="store" id="store3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;