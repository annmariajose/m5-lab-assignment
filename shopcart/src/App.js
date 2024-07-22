import Navbar from "./Navbar";
import './App.css';
import React, { useState } from 'react';
import { ProductData } from "./Products";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [cartCount, setCount] = useState(0);
  const [productData] = useState(ProductData.products);
  const [login, setLogin] = useState(false);
  const [facebookData, setFacebookData] = useState({}); //set up fb data
  const [profilePicture, setProfilePicture] = useState('');

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

  const HandleFacebookLogin = (response) => {
    console.log(response);
    setFacebookData(response);
    setProfilePicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
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
        login={login}
        productData={productData}
        facebookData={facebookData}
        profilePicture={profilePicture}
        OnChange={OnChange} 
        HandleProductAdd={HandleProductAdd}
        HandleProductSubtract={HandleProductSubtract}
        HandleFacebookLogin={HandleFacebookLogin}
      />
    </div>
  );
}

export default App;
