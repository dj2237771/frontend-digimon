import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

function UpdateDigimonModal(props) {
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);

  const updateItemInfo = async (e) => {
    e.preventDefault();
    const itemData = {
      digimonName: e.target.name.value,
      digimonLevel: e.target.level.value,
      digimonImg: e.target.img.value,
    };
    const resultsUpdate = await axios.put(
      `${serverLink}/digimon/${props.itemIndex}`,
      itemData
    );
    props.handleClose();
    props.UpdateDigimons(resultsUpdate);
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateItemInfo}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.digimonName}
              type="text"
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="level">
            <Form.Label>Level</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.digimonLevel}
              type="text"
              name="level"
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.digimonImg}
              type="text"
              name="img"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Item
          </Button>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default UpdateDigimonModal;
