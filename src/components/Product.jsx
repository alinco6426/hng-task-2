import "../styles/product.css"
import iconStar from "../assets/icons/icon-star.svg"

function Product ({product}){
     return(
     <section className="product">
        <figure className="product-image-container">
          <img src={product.image} alt="product-image" />
        </figure>
        <div className="product-details-container">

          <div className="icon-stars-container">
          {Array(5).fill().map((_, index) => (
            <img src={iconStar} alt="icon-star" className="icon-star" key={index} />
          ))}
        </div>
        
          <h5 className="product-name">{product.name}</h5>
          <h2 className="product-price"># {product.price.toLocaleString()}</h2>
          <button className="add-to-cart-button">+</button>
        </div>
      </section>
     )
}

export default Product