import { NavLink } from "react-router-dom";

// 클릭 시 해당 컴포넌트만 보여주는 방식 (조건문)

const Footer = () => {
  const links = [
    {
      name: "내 지역",
      path: "/",
    },
    {
      name: "전체 시도",
      path: "/AllArea",
    },
    {
      name: "즐겨찾기",
      path: "/BookmarkArea",
    },
  ];

  return (
    <ul className="footer-container">
      {links.map(({ name, path }, index) => {
        return (
          <li key={`link_${index}`} className={`footer-contents footer-contents_${index}`}>
            {/* <NavLink to={path} className={({ isActive }) => (isActive ? "active-nav" : "")} onClick={() => setIsNavShowing((prev) => !prev)}> */}
            <NavLink to={path}>{name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Footer;
