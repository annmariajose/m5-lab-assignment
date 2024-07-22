import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayProducts from "./DisplayProducts";
import Login from "./Login";
import Cart from "./Cart";

function Navbar(props) {
  return (
    <div className="header">
      <Router>
        {/* Navigation */}
        <div className='bg-info'>
          <ul className="nav px-5 p-4 d-flex justify-content-between align-items-center">
            <li>
              <Link to="/">
                  <button className='logoButton text-white bg-info'>
                      <h2>Shop 2&nbsp;
                      <span className='logoR border rounded-circle bg-white text-info'>
                          &nbsp;R&nbsp;
                      </span>
                      eact</h2>
                  </button>
              </Link>
            </li>
            <li className="d-inline-flex align-items-center">
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="mx-3 text-white"
                />
              </Link>
              <p className='mt-3 text-white'>{props.cartCount} items</p>
            </li>
          </ul>
        </div>
        {/* Routes */}
        <Routes>
          <Route exact path="/" element={
            <DisplayProducts
                productData={props.productData} 
                OnChange={props.OnChange} 
                HandleProductAdd={props.HandleProductAdd}
                HandleProductSubtract={props.HandleProductSubtract}
            />
          } />
          <Route path="/cart" element={
            <Cart
                productData={props.productData}
                cartCount={props.cartCount}
            />
          } />
          <Route path="/login" element={
            <Login
                login={props.login}
                cartCount={props.cartCount}
                facebookData={props.facebookData}
                profilePicture={props.profilePicture}
                HandleFacebookLogin={props.HandleFacebookLogin}
            />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default Navbar;
