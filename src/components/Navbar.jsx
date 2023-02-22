import { useState } from "react";
import styled from "styled-components";
import hambBtnUrl from "../assets/white-bars-hamb-btn.png";
<link
  rel="stylesheet"
  href="https://kit.fontawesome.com/03be3b7703.css"
  crossorigin="anonymous"
></link>;

export default (props) => {
  const [clicked, setClicked] = useState(false);

  const hambClick = () => {
    setClicked(!clicked);
  };

  return (
    <Header>
      <Nav>
        {props.title ? <a className="logo">{props.title}</a> : ""}

        <button className="nav-toggle" onClick={hambClick}>
          <img src={hambBtnUrl} />
        </button>

        <ul
          className={`${!clicked ? "nav-menu" : "nav-menu nav-menu_visible"}`}
          onClick={hambClick}
        >
          <li className="nav-menu-item">
            <a href={props.home} className="nav-menu-link">
              Home
            </a>
          </li>
          <li className="nav-menu-item">
            <a href={props.link2} className="nav-menu-link">
              Proyectos
            </a>
          </li>
          <li className="nav-menu-item">
            <a href={props.link3} className="nav-menu-link">
              Mas sobre mi
            </a>
          </li>
          <li className="nav-menu-item">
            <a href={props.link4} className="nav-menu-link">
              Contacto
            </a>
          </li>
          <li className="nav-menu-item">
            <a
              href={props.lastBtn}
              className="nav-menu-link nav-menu-link_active"
              target="_blank"
            >
              MI CV
            </a>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  z-index: 1;
  background-color: #010108;
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    height: 60px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  max-width: 992px;
  margin: 0 auto;
  .logo {
    font-size: 30px;
    letter-spacing: 5px;
    font-weight: bold;
    padding: 0 40px;
    line-height: 80px;
  }
  .nav-toggle {
    cursor: pointer;
    img {
      width: 30px;
    }
    background: none;
    border: none;
    padding: 0 20px;
    line-height: 80px;
    display: none;
  }
  .nav-menu {
    display: flex;
    margin-right: 40px;
    list-style: none;
  }
  .nav-menu-item {
    cursor: pointer;
    font-size: 18px;
    margin: 0 10px;
    line-height: 80px;
    text-transform: uppercase;
    width: max-content;
  }

  .nav-menu-link {
    padding: 8px 12px;
  }

  .nav-menu-link:hover,
  .nav-menu-link_active {
    background-color: #034574;
    transition: 0.5s;
  }

  .nav-menu-link_active:hover {
    background: linear-gradient(
      225deg,
      rgba(3, 69, 116, 1) 0%,
      rgba(1, 30, 51, 1) 100%
    );
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    .logo {
      font-size: 25px;
      padding: 0 20px;
      line-height: 60px;
    }

    .nav-menu {
      flex-direction: column;
      align-items: center;
      margin-right: 20px;
      background-color: #2c3e50;
      position: fixed;
      letf: 0;
      top: 60px;
      width: 100%;
      padding: 20px 0;
      height: calc(100% - 60px);
      overflow-y: auto;
      left: 100%;
      transition: left 0.3s;
    }

    .nav-menu-item {
      line-height: 70px;
    }

    .nav-menu-link:hover {
      background: none;
      color: #83c5f7;
    }

    .nav-toggle {
      display: block;
    }
  }
  .nav-menu_visible {
    left: 0;
  }

  .nav-toggle:focus:not(:focus.visible) {
    outline: none;
  }
`;
