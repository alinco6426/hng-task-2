import NavBar from "./NavBar"
import imageHeadphone from "./../assets/images/image-headphone.png";
import iconCart from "../assets/icons/cart-shopping-solid.svg";
import iconArrow from "../assets/icons/noun-arrow-down-2424963.svg"

import "../styles/header.css"

export default function Header(){
     return (
          <header>
               <NavBar></NavBar>
               <div className="header-content-wrapper">
                        <section className="header-content">
                    <div className="explore">Explore Our Collection of Gadgets</div>
                    <h1 className="heading">
                         the Future of <br /> 
                         <span>Technology <br /> Today </span>
                    </h1>
                    <p className="content">
                         Stay ahead with the latest in tech innovation.
                         Whether you're looking for cutting-edge <br/> smartphones, powerful accessories,
                         or the newest gadgets, we have it all.
                    </p>

                    <button type="button">
                         <img src={iconCart} alt="icon-cart" />
                         shop now
                    </button>
               </section>
               <div className="header-illustration-container">
                    <img src={imageHeadphone} alt="image-headphone" />
               </div>
            </div>
          </header>
     )
}