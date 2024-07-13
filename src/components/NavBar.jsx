import { NavLink } from "react-router-dom";
import iconSearch from "../assets/icons/magnifying-glass-solid.svg";
import iconBars from "../assets/icons/noun-hamburger-2724872.svg";
import iconClose from "../assets/icons/noun-close-636011.svg"
import "../styles/nav.css";
import {  useState } from "react";

function NavBar(){
  const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

return (
<nav>
    <section className="logo-container">
        <h1 className="logo">Gadget<span>Store</span></h1>
    </section>

    <div className={`nav-modal ${isActive ? 'active' : ''}`}>
      <section className="nav-container">

      <button className="close-btn" type="button" onClick={toggleClass}>
        <img src={iconClose} alt="icon-close" className="icon-close" />
      </button>
      
      <ul className="nav-list">
        <NavLink to="/">Home</NavLink>
        <a href="#">Categories</a>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/right">Contact Us</NavLink>
        {/* <a href="#">Contact Us</a> */}
      </ul>

      <div className="search-bar-container">
        <img src={iconSearch} alt="icon-search" />
        <input type="text" placeholder="Search" />
      </div>
      </section>
    </div>

    <button type="button" className="nav-button" onClick={toggleClass}>
        <img src={iconBars} alt="icon-bars" />
    </button>
</nav>
)
}

export default NavBar