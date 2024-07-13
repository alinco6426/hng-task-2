import useProductStore from "../Store/ProductStore";
function Cartt(){
     const {cart , controlQuantity , removeProductFromCart , clearCart , getTotal} = useProductStore();
     return(
          <div className="cart">
               <h2>Cart</h2>
               {cart.map((item) => (
                    <li key={item.name}>
                         <p>{item.name}</p>
                         <p>{item.id}</p>
                         <button type="button" onClick={() => controlQuantity(item.id , "inc")}>inc</button>
                         <br />
                         <button type="button" onClick={() => controlQuantity(item.id , "dsc")}>dsc</button>
                         <br />
                         <br />
                         <button type="button" onClick={() => removeProductFromCart(item.id)}>remove</button>
                    </li>
               ))}
               <button type="button" onClick={() => clearCart()}>clear cart </button>
               <br />
               <br />
               <h1>{getTotal}</h1>
               {/* <button type="button" onClick={() => clearCart()}> </button> */}

          </div>
     )
} 

export default Cartt