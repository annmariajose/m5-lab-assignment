import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import './DisplayProducts.css';
import "bootstrap/dist/css/bootstrap.min.css";

function DisplayProducts(props) {
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true)
    setShowImage(product);
  };

  return (
    <div>
      {props.productData.map((product, index) =>
        <div className="productContainer mt-3" key={index}>
          <h3 className='title px-5 mx-3'>{product.title}</h3>
          <div className='product d-inline-flex align-items-center mx-5'>
            <img src={product.imageSrc} onClick={() => handleShow(product)} className="img-fluid" alt={product.title} />
            <div className='mx-5 px-4'>
              <input type="number" id={index} name={product.title} onChange={props.OnChange} placeholder={product.value}></input>
              <label className='mx-2'>quantity</label>
            </div>
          </div>
          <hr></hr>
        </div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImage.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImage.imageSrc}
            width="350"
            alt={showImage.title}
            className='mx-5'
          />
          <p><span className='text-dark'>Ratings:</span> {showImage.ratings}/5</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DisplayProducts;
