import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './Product.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { food_list, cartItem, removeFromCart, addToCart } =
    useContext(StoreContext);

  useEffect(() => {
    const selectedProduct = food_list.find((item) => item._id === Number(id));
    if (selectedProduct) {
      setProduct(selectedProduct)
    }
  }, [food_list, id])

  return (
    <div className="product-details">
      <div className="img">
        <img
          src={product?.image}
          alt={product?.name}
          className="product-image"
        />
      </div>
      <div className="other-details">
        <h1>{product?.name}</h1>
        <p>Price: #{product?.price}</p>
        <h3>Description</h3>
        <p>{product?.how}</p>
          <div className="food-item-counter">
            <FaMinus onClick={() => removeFromCart(id)} />
            <p>{cartItem[id]}</p>
            <FaPlus onClick={() => addToCart(id)} />
          </div>
      </div>
    </div>
  );
};

export default Product;