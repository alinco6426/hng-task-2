import "../styles/carted-product.css"
import useProductStore from "../Store/ProductStore";


export default function CartedProduct({product}){

      const {controlQuantity , removeProductFromCart } = useProductStore();
     return (
          <section className="carted-product">
               <div className="product-info">
                   <figure className="product-image-container">
                        {product.photos && product.photos.length > 0 && (
                    <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt={product.name} />
                    )}
                   </figure>
                   <div className="product-name-container">
                        <h5 className="product-name" >{product.name}</h5>
                        <button className="remove-btn" type="button" onClick={() => removeProductFromCart(product.id)}>Remove</button>
                   </div>
               </div>
                <section>
                    <button type="button" className="inc-pd-btn" onClick={() => controlQuantity(product.id , "inc")}>+</button>
                     <p>{product.quantity}</p>
                    <button type="button" className="dsc-pd-btn" onClick={() => controlQuantity(product.id , "dsc")}>-</button>
                </section>
               <h1 className="product-price">#{product.subTotal}</h1>
          </section>
     )
}