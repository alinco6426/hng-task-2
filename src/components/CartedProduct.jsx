import "../styles/carted-product.css"
export default function CartedProduct({product}){
     return (
          <section className="carted-product">
               <div className="product-info">
                   <figure className="product-image-container">
                        <img src={product.image} alt="product-image"/>
                   </figure>
                   <div className="product-name-container">
                        <h5 className="product-name">{product.name}</h5>
                        <button className="remove-btn" type="button">Remove</button>
                   </div>
               </div>
               <button type="button" className="inc-pd-btn">+{product.quantity}</button>
               <h1 className="product-price">#{product.price}</h1>
          </section>
     )
}