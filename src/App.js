import Header from "./components/Header";
import Visual from "./components/Visual";
import Recommend from "./components/Recommend";
import Tour from "./components/Tour";

function App() {
  return (
    <div className="wrap">
      {/* <!-- 상단 영역 --> */}
      <Header />
      {/* <!-- 메인 영역 --> */}
      {/* <!-- 내용을 구분할 때 section 사용 --> */}
      {/* <!-- 레이아웃을 구분할 때 div 사용 --> */}
      {/* <!-- 잡다한 레이아웃 잡을 때 span 사용 --> */}
      <div className="main">
        <Visual />
        <Recommend />
        <Tour />
      </div>
      {/* <!-- 하단 영역 --> */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
