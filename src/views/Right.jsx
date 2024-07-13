import React, { useEffect } from 'react';
import useProductStore from '../Store/ProductStore';
import { useNavigate } from 'react-router-dom';

function Right() {
  const { products, fetchProducts, error , addProductToCart , controlQuantity , fetchNextPage , fetchPreviousPage} = useProductStore();
  const navigate = useNavigate()

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); 

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.name}</h4>
            <h3>{product.description}</h3>
            {product.photos.map((image) => (
              <img key={image.url} src={`https://api.timbu.cloud/images/${image.url}`} alt="" />
            ))}
            <button type='button'></button>
            <br />
            <button onClick={() => navigate(`/product-details/${product.url_slug}`)}>view product</button>
            <br />
            <br />
            <button type='button' onClick={() => addProductToCart(product.unique_id)}>add to cart</button>
               <br />
            <br />
            <button type='button' onClick={() => controlQuantity(product.unique_id ,"inc")}>inc</button>
               <br />
            <br />
            <button type='button' onClick={() => controlQuantity(product.unique_id)}>dsc</button>
          </li>
         
        ))}
      </ul>
       <button type='button' onClick={() => fetchNextPage()}>next page</button>
          <br />
            <br />
             <button type='button' onClick={() => fetchPreviousPage()}>previous page</button>
               <br />
            <br />
    </div>
  );
}

export default Right;
