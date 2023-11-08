import styled from "@emotion/styled";
// 슬라이드 좌측 이동 버튼
export const BtnSlidePrev = styled.button`
  position: absolute;
  top: 50%;
  left: 0px;
  width: 50px;
  height: 50px;
  border: 1px solid #e5e1e5;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transform: translate(-50%, -50%);
  border-radius: 50%;

  &::before {
    content: "";
    position: relative;
    width: 10px;
    height: 18px;
    display: block;
    margin: 0 auto;
    background: url("../../images/slider_arrow.svg") no-repeat center;
    transform: rotateY(180deg);
  }
`;

// 슬라이드 우측 이동 버튼
export const BtnSlideNext = styled.button`
  position: absolute;
  top: 50%;
  right: 0px;
  width: 50px;
  height: 50px;
  border: 1px solid #e5e1e5;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transform: translate(50%, -50%);
  border-radius: 50%;

  &::before {
    content: "";
    position: relative;
    width: 10px;
    height: 18px;
    display: block;
    margin: 0 auto;
    background: url("../../images/slider_arrow.svg") no-repeat center;
  }
`;

// 카테고리 버튼
export const BtnCate = styled.button`
  position: relative;
  display: block;
  padding: 0 20px;
  border: 1px solid ${(props) => (props.active ? "transparent" : "#e5e5e5")};
  background-color: ${(props) => (props.active ? "#111" : "#fff")};
  font-size: 1.4rem;
  font-weight: ${(props) => (props.active ? 700 : 400)};
  line-height: 42px;
  color: ${(props) => (props.active ? "#fff" : "#111")};
  cursor: pointer;
  border-radius: 27px;
`;
