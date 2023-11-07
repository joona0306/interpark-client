import "swiper/css";
import "swiper/css/navigation";
import "../styles/tour.css";
import "../styles/common.css";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import axios from "axios";

const Tour = () => {
  // js 코드 자리
  // JSX 요소를 React 에서 참조
  const swiperRef = useRef();

  // JSON 데이터 저장해 두고, 자료가 바뀌면 화면을 변경할
  // 리액트 변수를 만든다.
  const [htmlTag, setHtmlTag] = useState([]);

  // 외부 데이터 연동하기 (axios 이용)
  const axiosJsonData = () => {
    axios
      .get("tour.json")
      .then(function (res) {
        let arr = [];
        for (let i = 0; i < res.data.total; i++) {
          const obj = res.data["good_" + (i + 1)];
          arr[i] = obj;
        }
        setHtmlTag(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 외부 데이터 연동하기 (fetch 이용)
  const getJsonData = () => {
    fetch("tour.json")
      .then((response) => {
        // 자료가 불러들여졌을 때
        return response.json();
      })
      .then((result) => {
        // 자료를 원하는데로 처리
        // result를 화면에 출력
        // 자료가 바뀌면 화면을 변경하는 기능생성
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["good_" + (i + 1)];
          arr[i] = obj;
        }
      })
      .catch((error) => {
        // 에러 발생
      });
  };

  // 가격 콤마적용 기능
  const formatPriceWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // 컴포넌트를 화면에 출력할 때 실행할 내용
  useEffect(() => {
    // 외부 데이터 불러들이기
    axiosJsonData();
    // getJsonData();
  }, []);

  return (
    <section className="tour">
      <div className="tour-inner">
        <div className="tour-header">
          <h2 className="tour-title">투어 특가</h2>
          <span className="tour-txt">해외여행은 인터파크다</span>
        </div>

        <div className="tour-main">
          <div className="tour-category">
            <ul className="tour-list">
              <li>
                <button className="tour-cate-btn tour-cate-btn-active">
                  망설이면 품절
                </button>
              </li>
              <li>
                <button className="tour-cate-btn">패키지</button>
              </li>
              <li>
                <button className="tour-cate-btn">국내숙소</button>
              </li>
              <li>
                <button className="tour-cate-btn">해외숙소</button>
              </li>
            </ul>
          </div>

          <div className="tour-slide-wrap">
            <Swiper
              slidesPerView={3}
              spaceBetween={28}
              slidesPerGroup={3}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".tour-slide-wrap .slide-next-btn",
                prevEl: ".tour-slide-wrap .slide-prev-btn",
              }}
              className="tour-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide">
                      <div className="tour-slide-item">
                        <a href={item.url} className="tour-link">
                          <div className="tour-img">
                            <img src={item.image} alt={item.benefit} />
                          </div>
                          <div className="tour-info">
                            <div className="tour-badge">
                              <i>{item.badge}</i>
                            </div>

                            <div className="tour-benefit">{item.benefit}</div>

                            <div className="tour-place">{item.place}</div>

                            <div className="tour-price">
                              <em>{formatPriceWithCommas(item.price)}</em>
                              <span>원~</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <button className="slide-prev-btn">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button className="slide-next-btn">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="tour-footer">
          <a href="#" className="btnMore">
            <span>투어 홈 바로가기</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Tour;
