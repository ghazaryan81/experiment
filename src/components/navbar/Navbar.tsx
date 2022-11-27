import { useState, useEffect } from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.svg";
import Basket from "../../assets/images/basket.svg";
import { ReactComponent as Hamburger } from "../../assets/images/hamburger.svg";
const Navbar = ({ items }) => {
  const [dropDown, dropDownSetCount] = useState(false);

  // dropDownToggle
  function dropDownToggle() {
    dropDownSetCount(!dropDown);
  }

  return (
    <header className="main-header">
      <div className="main-header__logo">
        <img src={Logo} alt="NOOTRIS" />
      </div>

      <button className="main-header__hamburger-menu" onClick={dropDownToggle}>
        <Hamburger />
      </button>

      <ul className={dropDown ? `menu display-block` : `menu`}>
        {items?.map((item, index) => (
          <li className="menu__item" key={index}>
            <a href="#" className="menu__item-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="main-header__basket">
        <button className="main-header__basket-btn">
          <img src={Basket} alt="basket" />
        </button>
        <div className="main-header__quantity">1</div>
      </div>
    </header>
  );
};

export default Navbar;
