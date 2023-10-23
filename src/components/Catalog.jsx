import React, { useState, useEffect } from 'react';


const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch('./products.json') 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al cargar los productos', error));
  }, []);

  return (
    <div>
      <h1>Catalog</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>Nombre: {product.name}</p>
            <p>Descripción: {product.description}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
