import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Ticket = () => {
  // js코드자리
  // JSX요소 React에서 참조
  const swiperRef = useRef();

  // JSON 데이터 저장 및 화면 변경용 리액트 변수생성
  const [htmlTag, setHtmlTag] = useState([]);

  // 외부 데이터 연동 (axios이용)
  const axiosJsonData = () => {
    axios
      .get("ticket.json")
      .then(function (res) {
        let arr = [];
        for (let i = 0; i < res.data.total; i++) {
          const obj = res.data["good_" + (i + 1)];
          arr[i] = obj;
        }

        setHtmlTag(arr);
      })
      .catch(function (error) {});
  };

  // 원하는 시점 감시 및 실행
  useEffect(() => {
    axiosJsonData();
  }, []);

  return (
    
  );
};

export default Ticket;
