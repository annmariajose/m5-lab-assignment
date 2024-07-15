import DisplayProducts from './DisplayProducts';
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

  //update props values when changing input fields
  function OnChange(event) {
    productData[event.target.id].value = event.target.value;
    const sumOfCartItems = productData.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.value), 0,
    );
    setCount(sumOfCartItems);
  }

  return (
    <div className="App">
      <header className="sticky-top p-5 py-4 bg-info text-black d-flex flex-row justify-content-between align-items-center">
        <h2>Shop to React</h2>
        <div className='d-inline-flex align-items-center'>
          <FontAwesomeIcon className='m-3' icon={faShoppingCart} />
          <p className='mt-3'>{count} items</p>
        </div>
      </header>
      <DisplayProducts productData={productData} OnChange={OnChange}/>
    </div>
  );
}

export default App;
