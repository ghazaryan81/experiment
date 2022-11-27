import "./Navbar.scss";
import Logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/basket.svg";

const Navbar = ({ items }) => {
  return (
    <header className="navbar">
      <div className="navbar_logo">
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <ul className="navbar-items">
          {items?.map((item) => (
            <li className="navbar-items_item">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-basket">
        <button className="navbar-basket_icon">
          <img src={basket} alt="logo" />
        </button>
        <div className="navbar-basket_quantity">1</div>
      </div>
    </header>
  );
};

export default Navbar;
