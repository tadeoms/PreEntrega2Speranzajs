import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    fetch('./products.json') 
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find((item) => item.id === parseInt(id));
        setProduct(selectedProduct);
      })
      .catch((error) => console.error('Error al cargar los detalles del producto', error));
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h1>Detalles del Producto</h1>
          <p>Nombre: {product.name}</p>
          <p>Descripción: {product.description}</p>
          <p>Precio: ${product.price}</p>
          <p>Detalles adicionales: {product.details}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ProductDetail;
