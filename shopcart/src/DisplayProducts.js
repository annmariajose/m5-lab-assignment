import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import './DisplayProducts.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <div className='product d-inline-flex align-items-start mx-5'>
            <img
              src={product.imageSrc} 
              onClick={() => handleShow(product)} 
              className="img-fluid" 
              alt={product.title} 
            />
            <div className='mx-5 px-3 d-flex align-items-center'>
              <div className='mx-5 pt-5'>
                <button className='mx-2 rounded' id={index} onClick={props.HandleProductAdd}>
                  <FontAwesomeIcon 
                    icon={faCirclePlus} 
                    className='text-white'
                    style={{width: "1.5em", height: "1.5em", paddingTop: "0.25em"}}
                    pointerEvents="none"
                  />
                </button>
                <button className='rounded' id={index} onClick={props.HandleProductSubtract}>
                  <FontAwesomeIcon 
                    icon={faCircleMinus} 
                    className='text-white'
                    style={{width: "1.5em", height: "1.5em", paddingTop: "0.25em"}}
                    pointerEvents="none"
                  />
                </button>
              </div>
              <div className='d-flex flex-column align-items-center pt-2'>
                <label className='my-2'>Quantity</label>
                <input 
                  type="number" 
                  id={index} 
                  name={product.title} 
                  value={product.value}
                  onChange={props.OnChange} 
                  className='text-center'
                ></input>
              </div>
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
