import { BtnSlidePrev, BtnSlideNext } from "../components/ui/buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { InnerArea, SectionTag } from "./layout/layout";
// axios 모듈(js파일) 가져오기
import axios from "axios";
import "swiper/css";
import "../styles/visual.css";

const Visual = () => {
  // js 코드 자리
  // JSX 에 작성된 html 태그를 React 에서 참조
  // 1. swiper 슬라이드 태그를 참조한다.
  const swiperRef = useRef();

  // 외부 데이터 연동 (axios 활용)
  const axiosGetData = function () {
    axios
      .get("http://localhost:4000/visual")
      .then(function (res) {
        makeVisualSlide(res.data);
      })
      .catch(function (error) {
        console.log(error);
        // 우리가 작업할 더미를 작성해 둬야 합니다.
        const dObj = {
          total: 6,
          visual_1: {
            file: "images/v1.png",
            url: "a.html",
          },
          visual_2: {
            file: "images/v2.jpg",
            url: "b.html",
          },
          visual_3: {
            file: "images/v3.jpg",
            url: "c.html",
          },
          visual_4: {
            file: "images/v4.jpg",
            url: "d.html",
          },
          visual_5: {
            file: "images/v5.jpg",
            url: "e.html",
          },
          visual_6: {
            file: "images/v6.png",
            url: "f.html",
          },
        };
        makeVisualSlide(dObj);
      });
  };

  // 외부 데이터 연동 ( fetch 활용 )
  const fetchGetData = () => {
    fetch("visual.json")
      .then((res) => res.json())
      .then((result) => {
        //       // console.log(result);
        //       // 자료 출력
        makeVisualSlide(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // visual 슬라이드 내용 채우는 기능
  // 리액트용 변수 : 컴포넌트에 출력할 JSX
  //        일반변수 말고 리액트용 변수를 state 라고 함
  let [visualHtml, setVisualHtml] = useState([]);

  const makeVisualSlide = (_data) => {
    const visualRes = _data;
    // console.log(visualRes);
    // for(초기값; 조건식; 증감식) {할일};
    let visualArray = [];
    for (let i = 0; i < visualRes.total; i++) {
      // console.log("visual_" + (i + 1));
      visualArray[i] = visualRes["visual_" + (i + 1)];
    }
    // console.log(visualArray);
    setVisualHtml(visualArray);

    // // 배열자료(VisualArray)를 뜯어서 컴포넌트 담기
    // let SlideArray = [];
    // for (let i = 0; i < visualRes.total; i++) {
    //   SlideArray[i] = <SwiperSlide></SwiperSlide>;
    // }
    // console.log(SlideArray);
  };

  //컴포넌트가 렌더링 되면 데이터 호출 및 배치
  // 주로 하는 작업
  //  1. 네트워크 연동 외부 데이터 불러들임
  //  2. html 을 제어할 때
  //  3. window 를 제어할 때
  //  4. windw.addEventListener 작성할 때
  //  5. window.removeEventListener 작성할 때
  //  6. 컴포넌트가 삭제 될 때

  useEffect(() => {
    // 렌더링될 때
    // visual.json 데이터 불러들이기 기능실행
    axiosGetData();
    // fetchGetData();

    return () => {
      // 삭제될 때 (clean Up 함수)
    };
  }, []);

  const SlideItem = styled.div`
    position: relative;
    width: 628px;
  `;
  const SlideLink = styled.a`
    position: relative;
    width: 100%;
    display: block;
    overflow: hidden;
    border-radius: 13px;

    img {
      width: 100%;
    }
  `;

  return (
    <SectionTag pt={30} pb={80}>
      <InnerArea style={{ height: 345 }}>
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="visual-slide"
        >
          {visualHtml.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <SlideItem>
                  <SlideLink href={item.url}>
                    <img
                      src={process.env.PUBLIC_URL + item.file}
                      alt={item.file}
                    />
                  </SlideLink>
                </SlideItem>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <BtnSlidePrev
          onClick={() => {
            swiperRef.current.slidePrev();
          }}
        ></BtnSlidePrev>
        <BtnSlideNext
          onClick={() => {
            swiperRef.current.slideNext();
          }}
        ></BtnSlideNext>
      </InnerArea>
    </SectionTag>
  );
};
export default Visual;
