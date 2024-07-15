import './DisplayProducts.css';
import "bootstrap/dist/css/bootstrap.min.css";

function DisplayProducts(props) {
  const displayProducts = props.productData.map((item, index) =>
    <div className="productContainer mt-3" key={index}>
      <h3 className='title px-5 mx-3'>{item.name}</h3>
      <div className='product d-inline-flex align-items-center mx-5'>
        <img src={item.imageSrc} className="img-fluid" alt="product" />
        <div className='mx-5 px-4'>
          <input type="number" id={index} name={item.name} onChange={props.OnChange} placeholder={item.value}></input>
          <label className='mx-2'>quantity</label>
        </div>
      </div>
      <hr></hr>
    </div>
  );
  return (
    <div>
      {displayProducts}
    </div>
  );
}

export default DisplayProducts;
