import DisplayProducts from './DisplayProducts';
import './App.css';
import React, { useState } from 'react';
import { ProductData } from "./Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  let [cartCount, setCount] = useState(0);
  const [productData] = useState(ProductData.products);

  const HandleProductAdd = (event) => {
    ++productData[event.target.id].value;
    setCount(++cartCount);
  };

  const HandleProductSubtract = (event) => {
    if (productData[event.target.id].value > 0) {
      --productData[event.target.id].value;
      setCount(--cartCount);
    }
  };

  //update props values when changing input fields
  function OnChange(event) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
    productData[event.target.id].value = Math.floor(event.target.value);
    const sumOfCartItems = productData.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.value), 0,
    );
    setCount(sumOfCartItems);
  }

  return (
    <div className="App">
      <header className="sticky-top p-4 py-4 bg-info text-white d-flex flex-row justify-content-between align-items-center">
        <button className='logoButton text-white bg-info'>
          <h2>Shop 2&nbsp;
            <span className='logoR border rounded-circle bg-white text-info'>
              &nbsp;R&nbsp;
            </span>
          eact</h2>
        </button>
        <div className='d-inline-flex align-items-center px-2'>
          <FontAwesomeIcon className='m-3' icon={faShoppingCart} />
          <p className='mt-3'>{cartCount} items</p>
        </div>
      </header>
      <DisplayProducts
        productData={productData} 
        OnChange={OnChange} 
        HandleProductAdd={HandleProductAdd}
        HandleProductSubtract={HandleProductSubtract}
      />
    </div>
  );
}

export default App;
