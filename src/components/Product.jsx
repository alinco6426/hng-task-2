import "../styles/product.css"
import iconStar from "../assets/icons/icon-star.svg"
import useProductStore from "../Store/ProductStore"
import { useNavigate } from 'react-router-dom';

function Product ({product}){
     const {addProductToCart } = useProductStore();
     const navigate = useNavigate()
     return(
     <section className="product">
        <figure className="product-image-container">
          {product.photos && product.photos.length > 0 && (
          <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt={product.name} />
        )}
        </figure>
        <div className="product-details-container">

          <div className="icon-stars-container">
          {Array(5).fill().map((_, index) => (
            <img src={iconStar} alt="icon-star" className="icon-star" key={index} />
          ))}
        </div>
          <h5 className="product-name">{product.name}</h5>
          <h2 className="product-price"># {product.current_price[0].NGN[0].toLocaleString()}</h2>
          <button className="add-to-cart-button" onClick={() => addProductToCart(product.unique_id)}>+</button>
          <button onClick={() => navigate(`/product-details/${product.url_slug}`)}>view product</button>
        </div>
      </section>
     )
}

export default Product