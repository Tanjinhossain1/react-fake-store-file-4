
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ReactModal = (props) => {
    const {title,description ,price,image} = props.product
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='p-2 btn-info' variant="primary" onClick={handleShow}>
        Details
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <img className="w-50" src={image} alt="" />
            <Modal.Title>{title}</Modal.Title>
          
          </Modal.Header>
          <Modal.Body>{description }</Modal.Body>
          
          <Modal.Footer>
          <h4>Price:{price}$</h4>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
// render(<ReactModal />);
export default ReactModal;