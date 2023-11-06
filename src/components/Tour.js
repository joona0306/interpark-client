import "swiper/css";
import "swiper/css/navigation";
import "../styles/tour.css";
import "../styles/common.css";
import { useEffect, useRef, useState } from "react";
import { Swiper } from "swiper/types";

const Tour = () => {
  // js 코드 자리
  // JSX 요소를 React 에서 참조
  const swiperRef = useRef();

  // JSON 데이터 저장해 두고, 자료가 바뀌면 화면을 변경할
  // 리액트 변수를 만든다.
  const [htmlTag, setHtmlTag] = useState([]);

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
    getJsonData();
  }, []);

  return (
    
  );
};
export default Tour;
