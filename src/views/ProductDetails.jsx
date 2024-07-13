import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductStore from '../Store/ProductStore';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import  "../styles/product-details.css"

function ProductDetails() {
  const { slug_name } = useParams();
  const { findProduct, fetchProducts, products, error , addProductToCart } = useProductStore();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts(); 
    } else {
      const foundProduct = findProduct(slug_name);
      setProduct(foundProduct);
    }
  }, [products, fetchProducts, slug_name, findProduct]);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = findProduct(slug_name);
      setProduct(foundProduct);
    }
  }, [products, slug_name, findProduct]);

  if (error) {
    return <div>
      <h1>Product not found</h1>
    </div>;
  }

  if (!product) {
    return <div>Loading...</div>; 
  }

  const boxContents = product.description.split("Box Contents:")[1]?.split(' ').map(item => item.trim()) || [];

  return (
    <main className='product-details-container'>
      <NavBar></NavBar>

      <div className="product-to-display">
          {product.photos && product.photos.length > 0 && (
          <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt={product.name} />
        )}
        <div className='description-container'>
          <h1>{product.name}</h1>
          <p>{product.description.split("Box Contents:")[0]}</p>
          <h2 className='product-price'> # {product.current_price[0].NGN[0]}</h2>
          <button type="button" class="add-to-cart-btn"  onClick={() => addProductToCart(product.unique_id)}>add to cart</button>
        </div>
      </div>

      <section className="other-product-details">
        <div className='in-the-box-container'>
          <h1>Box content</h1>
          <ul>
            {boxContents.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="gallery">
          {product.photos.map((image) => (
              <img key={image.url} src={`https://api.timbu.cloud/images/${image.url}`} alt="" />
            ))}
        </div>
      </section>

      <Footer></Footer>
    </main>
  );
}

export default ProductDetails;
