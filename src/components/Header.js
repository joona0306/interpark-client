/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { HeaderTopLeft } from "../styled/header";
import "../styles/header.css";

function Header() {
  // js 코드 자리

  return (
    <header className="header">
      {/* <!-- 레이아웃 : div --> */}
      <div className="header-inner">
        <div className="header-top">
          <HeaderTopLeft w="625" h="50">
            <a href="index.html" className="logo"></a>
            {/* <!-- 검색은 div 하나 주자 --> */}
            <div className="header-search">
              {/* <!-- 사용자가 데이터를 입력한다. --> */}
              <form className="search-form">
                <input type="text" className="search-word" />
                <input type="button" value="검색" className="search-btn" />
              </form>
            </div>
          </HeaderTopLeft>
          <div className="header-top-right">
            <ul className="member-menu">
              <li>
                <a href="#">로그인</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
              <li>
                <a href="#" id="mypage-btn" className="mypage-btn">
                  마이페이지
                  <img src="../images/icon_arrow.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-bottom">
          {/* <!-- 카테고리 메뉴 --> */}
          <ul className="header-cate">
            <li>
              <a href="#">
                <img src="../images/icon_tour.png" alt="" />
                투어
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../images/icon_ticket.png" alt="" />
                티켓
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../images/icon_shopping.png" alt="" />
                쇼핑
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../images/icon_book.png" alt="" />
                도서
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../images/icon_triple.png" alt="" />
                트리플
              </a>
            </li>
            <li>
              <a href="#" className="icon-hot">
                <img src="../images/icon_special.png" alt="" />
                여행초특가
              </a>
            </li>
          </ul>
          {/* <!-- 잡다한 레이아웃 잡을 때 span 사용 --> */}
          {/* <!-- a,i,span은 inline이라 원래는 너비높이 못넣음 --> */}
          {/* <!-- 오늘의 이벤트 메뉴 --> */}
          <ul className="header-today-menu">
            <li>
              <a href="#">
                <img src="../images/icon_gnb_nol.png" alt="" />
                항공 즉시할인
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
