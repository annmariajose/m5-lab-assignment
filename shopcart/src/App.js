import Navbar from "./Navbar";
import './App.css';
import React, { useState } from 'react';
import { ProductData } from "./Products";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Navbar 
        cartCount={cartCount}
        productData={productData} 
        OnChange={OnChange} 
        HandleProductAdd={HandleProductAdd}
        HandleProductSubtract={HandleProductSubtract}
      />
    </div>
  );
}

export default App;
