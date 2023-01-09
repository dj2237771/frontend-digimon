import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

function FavItem(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.item.digimonImg} />
      <Card.Body>
        <Card.Title>{props.item.digimonName}</Card.Title>
        <Card.Text>{props.item.digimonLevel}</Card.Text>
        <Button
          variant="primary"
          onClick={() => props.showUpdateModalProps(props.item)}
        >
          Update
        </Button>
        <Button
          variant="primary"
          onClick={() => props.deleteDigimon(props.item._id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FavItem;
