import "./Navbar.scss";
import Logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/basket.svg";

const Navbar = ({ items }) => {
  return (
    <header className="main-header">
      <div className="main-header__logo">
        <img src={Logo} alt="NOOTRIS" />
      </div>
      <ul className="menu">
        {items?.map((item) => (
          <li className="menu__item">
            <a href="#" className="menu__item-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="main-header__basket">
        <button className="main-header__icon">
          <img src={basket} alt="basket" />
        </button>
        <div className="main-header__quantity">1</div>
      </div>
    </header>
  );
};

export default Navbar;
