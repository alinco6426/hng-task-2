import "../styles/product.css"

function Product ({product}){
     return(
     <section className="product">
        <figure className="product-image-container">
          <img src={product.image} alt="product-image" />
        </figure>
        <div className="product-details-container">
          <h5 className="product-name">{product.name}</h5>
          <h2 className="product-price">{product.price.toLocaleString()}</h2>
          <button className="add-to-cart-button">+</button>
        </div>
      </section>
     )
}

export default Product