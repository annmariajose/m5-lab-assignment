import './App.css';
import Product from './Product';
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const productData = [
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
  ];

  return (
    <div className="App">
      <header className="App-header p-5 py-4 bg-info text-black d-flex flex-row justify-content-between align-items-center">
        <h2>Shop to React</h2>
        <div className='d-inline-flex align-items-center'>
          <FontAwesomeIcon className='m-3' icon={faShoppingCart} />
          <p className='mt-3'>0 items</p>
        </div>
      </header>
      <Product productData={productData}/>
    </div>
  );
}

export default App;
