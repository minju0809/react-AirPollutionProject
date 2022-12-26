import React from "react";

export default function Footer({ setPage }) {
  return (
    <div className="footer__container">
      <div className="footer-contents" onClick={() => setPage(0)}>MyArea</div>
      <div className="footer-contents" onClick={() => setPage(1)}>AllArea</div>
      <div className="footer-contents" onClick={() => setPage(2)}>BookmarkArea</div>
    </div>
  );
}
