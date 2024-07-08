import "../styles/order-summary.css";
import { useNavigate } from "react-router-dom";
export default function OrderSummary(){
     const navigate = useNavigate()
     return (
          <section className="order-summary">
                    <h2>Oder summary</h2>
                    <ul>
                         <li>
                              <h4>Subtotal:</h4>
                              <h4>#90000</h4>
                         </li>
                         <li>
                              <h4>Tax:</h4>
                              <h4>00.00</h4>
                         </li>
                         <li>
                              <h4>Shipping:</h4>
                              <h4>#500</h4>
                         </li>
                         <li>
                              <h4>Total</h4>
                              <h4>#90500</h4>
                         </li>
                    </ul>
                    <button type="button" onClick={() => navigate("/checkout")}>Proceed Checkout</button>
               </section>
     )
}