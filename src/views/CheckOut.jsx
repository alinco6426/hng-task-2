import NavBar from "../components/NavBar";
import OrderSummary from "../components/OrderSummary";
import Footer from "../components/Footer";

import "../styles/checkout.css"



export default function CheckOut(){
     return (
     <main className="check-out">
         <NavBar></NavBar>
          <main className="form-container">
               <form action="POST">
                    <section className="form-heading">
                         <div className="pointer">
                              <div></div>
                         </div>
                         <h1>add new address</h1>
                    </section>
                    <label htmlFor="first-name">
                         <p>first name</p>
                         <input type="text" id="first-name" />
                    </label>
                    <label htmlFor="last-name">
                         <p>last name</p>
                         <input type="text" id="last-name" />
                    </label>
                    <label htmlFor="address">
                         <p>street address</p>
                         <input type="text"  id="address"/>
                    </label>
                    <label htmlFor="country">
                         <p>country or region</p>
                         <input type="text" id="country"/>
                    </label>
                    <label htmlFor="town">
                         <p>Town city</p>
                         <input type="text" id="town" />
                    </label>
                    <label htmlFor="apt-no">
                         <p>apt number</p>
                         <input type="text" id="apt-no" />
                    </label>

                    <button type="button">save this address </button>
               </form>
               <OrderSummary />
          </main>

          <Footer></Footer>

     </main>
     )
}