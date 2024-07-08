import iconFB from "./../assets/icons/facebook-f.svg"
import iconIG from "./../assets/icons/instagram.svg"
import iconTW from "./../assets/icons/linkedin-in.svg"
import iconIN from "./../assets/icons/twitter.svg";

import "../styles/footer.css"


export default function Footer (){
     return(
          <footer>
               <section className="news-letter-container">
                    <h1>Newsletter</h1>
                    <p>Subscribe to get information about products and coupons</p>
                    <div className="send-info-container">
                         <input type="email" id="input-email" placeholder="Email Address"/>
                         <button type="button">shop now</button>
                    </div>
               </section>

               <section className="footer-details-container">
                    <div className="about-company">
                         <div className="logo-container">
                             <h1 className="logo">Gadget<span>Store</span></h1>
                         </div>
                         <p>Get awesome gadgets from us any <br /> day any time.</p>
                         <div className="social-links">
                              <span><img src={iconFB} alt="icon-social"/></span>
                              <span><img src={iconIG} alt="icon-social"/></span>
                              <span><img src={iconTW} alt="icon-social"/></span>
                              <span><img src={iconIN} alt="icon-social"/></span>
                         </div>
                    </div>

                    <div className="useful-links-container">
                         <ul>
                              <li className="heading">
                                   <a href="#">Company</a>
                              </li>
                              <li>
                                   <a href="#">About</a>
                              </li>
                              <li>
                                   <a href="#">Contact us</a>
                              </li>
                              <li>
                                   <a href="#">Support</a>
                              </li>
                              <li>
                                   <a href="#">Careers</a>
                              </li>
                         </ul>

                         <ul>
                               <li className="heading">
                                   <a href="#">Quick Link</a>
                              </li> 
                              <li>
                                   <a href="#">Share location</a>
                              </li> 
                              <li>
                                   <a href="#">Orders Tracking</a>
                              </li> 
                              <li>
                                   <a href="#">Size Guide</a>
                              </li> 
                              <li>
                                   <a href="#">FAQS</a>
                              </li>
                         </ul>

                         <ul>
                               <li className="heading">
                                   <a href="#">Legal</a>
                              </li> 
                              <li>
                                   <a href="#">Terms & Conditions</a>
                              </li> 
                              <li>
                                   <a href="#">Privacy Policy</a>
                              </li>
                         </ul>
                    </div>
               </section>
          </footer>
     )
}