// 클릭 시 해당 컴포넌트만 보여주는 방식 (조건문)

const Footer = () => {
  return (
      <div className="footer-container">
        <button className="myArea">내 지역보기</button>
        <button className="all">전체 시도보기</button>
        <button className="bopkmark">즐겨찾기</button>
      </div>
  );
};

export default Footer;
