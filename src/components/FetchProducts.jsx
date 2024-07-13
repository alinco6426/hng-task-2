import React, { useEffect, useState } from 'react';
function FetchProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = new URLSearchParams({
          organization_id: '914a1ea0a41f41538a1a489f628d27de',
          reverse_sort: false,
          page: 1,
          size: 10,
          Appid: '0P3W7TBADIH3K9R',
          Apikey: '616ca87d3edb4e54bc48ed444168c15f20240712185722233413',
        });

        const response = await fetch(`/api/products?${params}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.items);
        console.log(data.items);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
