import { StarOutlined, StarFilled } from "@ant-design/icons";
import { useState } from "react";

const Bookmark = () => {
  const [bookmarkIcon, setBookmarkIcon] = useState("false");

  return (
    <div className="icons-list" onClick={() => setBookmarkIcon(!bookmarkIcon)}>
      {bookmarkIcon === true ? <StarFilled /> : <StarOutlined />}
    </div>
  );
};

export default Bookmark;
