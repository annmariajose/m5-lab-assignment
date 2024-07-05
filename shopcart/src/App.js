import './App.css';
import Product from './Product';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [count, setCount] = useState(0);
  const [productData] = useState([
    {
      name: "Unisex Cologne",
      value: 0,
      imageSrc: "./products/cologne.jpg"
    },
    {
      name: "Apple iWatch",
      value: 0,
      imageSrc: "./products/iwatch.jpg"
    },
    {
      name: "Unique Mug",
      value: 0,
      imageSrc: "./products/mug.jpg"
    },
    {
      name: "Mens Wallet",
      value: 0,
      imageSrc: "./products/wallet.jpg"
    }
  ]);

  function OnChange(event) {
    productData[event.target.id].value = event.target.value;
    let sum = Number(productData[0].value);

    for (let i = 1; i < productData.length; i++) {
      sum += Number(productData[i].value);
    }
    setCount(sum);
  }

  return (
    <div className="App">
      <header className="App-header p-5 py-4 bg-info text-black d-flex flex-row justify-content-between align-items-center">
        <h2>Shop to React</h2>
        <div className='d-inline-flex align-items-center'>
          <FontAwesomeIcon className='m-3' icon={faShoppingCart} />
          <p className='mt-3'>{count} items</p>
        </div>
      </header>
      <Product productData={productData} OnChange={OnChange}/>
    </div>
  );
}

export default App;
