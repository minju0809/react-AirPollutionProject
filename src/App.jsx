import React from "react";
import MyArea from "./pages/MyArea";
import AllArea from "./pages/AllArea";
import BookmarkArea from "./pages/BookmarkArea";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(0);
  const [bookmark, setBookmark] = useState({});

  const handleBookmark = (name, info) => {
    const prev_bookmark = localStorage.getItem("bookmark");
    if (!prev_bookmark) {
      const temp = {
        [name]: info,
      };
      localStorage.setItem("bookmark", JSON.stringify(temp));
    } else {
      const data = JSON.parse(prev_bookmark);
      const exist = data[name];
      if (exist) {
        delete data[name];
      } else {
        data[name] = info;
      }
      setBookmark(data);
      localStorage.setItem("bookmark", JSON.stringify(data));
    }
    console.log("localStorage", localStorage.getItem("bookmark"));
  };

  return (
    <div className="App">
      {page === 0 && (
        <MyArea
          bookmark={bookmark}
          handleBookmark={handleBookmark}
          setPage={setPage}
        />
      )}
      {page === 1 && (
        <AllArea
          bookmark={bookmark}
          handleBookmark={handleBookmark}
          setPage={setPage}
        />
      )}
      {page === 2 && (
        <BookmarkArea
          bookmark={bookmark}
          handleBookmark={handleBookmark}
          setPage={setPage}
        />
      )}
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
