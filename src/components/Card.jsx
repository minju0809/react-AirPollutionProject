const Card = () => {
  return (
    <div className="card-container">
      <div className="card-top">
        <div className="sidoName">지역</div>
        <div>즐겨찾기</div>
      </div>
      <div className="card-middle">
        {/* switch문 사용해볼 예정 */}
        <div>상태</div>
        <h5>미세먼지 수치</h5>
        <h5>(현재 시간)</h5>
      </div>
    </div>
  );
};

export default Card;
