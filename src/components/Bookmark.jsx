import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useState } from "react";

const Bookmark = () => {
  const [bookmarkIcon, setBookmarkIcon] = useState('false');

  return (
    <div className="icons-list" onClick={() => setBookmarkIcon(!bookmarkIcon)}>
      {bookmarkIcon === true ? (<HeartFilled />) : (<HeartOutlined />)}
    </div>
  );
};

export default Bookmark;