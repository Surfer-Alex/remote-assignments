import { useState } from "react";
const Header = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <header className="main-header">
      <h1 className="name">
        <a href="#">Website Title / LOGO</a>
      </h1>

      <ul className={isShow ? "main-nav" : "main-nav active"}>
        <li className="nav-item">
          <a href="#">Item1</a>
        </li>
        <li className="nav-item">
          <a href="#">Item2</a>
        </li>
        <li className="nav-item">
          <a href="#">Item3</a>
        </li>
        <li className="nav-item">
          <a href="#">Item4</a>
        </li>
      </ul>

      <div
        className={isShow ? "nav-bar" : "nav-bar active"}
        onClick={() => setIsShow(!isShow)}
      >
        <span className="bar one"></span>
        <span className="bar two"></span>
        <span className="bar three"></span>
      </div>
    </header>
  );
};

export default Header;
