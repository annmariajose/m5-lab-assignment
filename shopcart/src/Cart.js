import "bootstrap/dist/css/bootstrap.min.css";
import './Cart.css';
import { Button } from "bootstrap";

function Cart(props) {
  let cartEmpty = false;
  if (props.cartCount === 0) {
    cartEmpty = true;
  }
  return (
    <div className='cartContainer bg-white'>
      <h2>Your Cart Items</h2>
      {
      cartEmpty ? 
        <div className="p-2 text-danger">
          <p>Your cart is empty. Please add items to view them here.</p>
        </div> :
          props.productData.map((product, index) => {
            return product.value > 0 ?
              <div className="productContainer border" key={index}>
                <div className='product d-inline-flex align-items-start'>
                  <div className="text-center">
                    <img
                      src={product.imageSrc} 
                      className="img-fluid p-2" 
                      alt={product.title} 
                    />
                    <p>{product.title}</p>
                  </div>
                  <div className='quantity mx-5 px-3 pt-5 mt-3'>
                    <p>Quantity: {product.value}</p>
                  </div>
                </div>
              </div>
            : <div></div>
        }
      )}
      <button className='checkoutButton mt-4 rounded bg-primary text-white'>
        Check Out
      </button>
    </div>
  );
}

export default Cart;
