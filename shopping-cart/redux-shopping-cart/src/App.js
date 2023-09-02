import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from './component/Cart';
//import yellow from './';
import './App.css';

function App() {
  const resources = [
    {
      "kind": "content#product",
      "id": "1111111111",
      "source": "api",
      "title": "Google Tee Black",
      price: 25,
    },
    {
      "kind": "content#product",
      "id": "2222222222",
      "source": "api",
      "title": "Google Tee Green",
      price: 25,
    },
    {
      "kind": "content#product",
      "id": "3333333333",
      "source": "api",
      "title": "Google Twill Cap",
      price: 25,
    }
  ];

  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems)
  const dispatch = useDispatch();
  const addToCart = (id, price) => {
    dispatch(
      cartActions.addToCart({
        id,
        price,
      })
    );
  };
  
 
  const decrementCartItems = () => {
    dispatch(cartActions.removeFromCart());
  };
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };
  return (
   
    <div className="App">
    <div className="resource-container">
      {resources.map((resource) => (
        <div key={resource.id} className="resource">
          <img src='' alt="no image" />
          <h1>{resource.title}</h1>
          <span>Price: {resource.price}</span>
          <button onClick={() => addToCart(resource.id, resource.price)}>Add to cart</button>
        </div>
      ))}
    </div>
    
    { cartItems.map((item) => (
      <div className="cartItem" key={item.id}>
        <p>${item.price} /-</p>
        <p>x{item.quantity}</p>
        <article>Total ${item.total}</article>
        <button onClick={decrementCartItems} className="cart-actions">-</button>
      </div>
    ))}
    
   
  </div>
  
  );
}

export default App;
