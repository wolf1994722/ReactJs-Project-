import React, { useEffect, useState } from "react";
import { useFireBase } from "../contexts";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  const [url, setUrl] = useState(null);
  const firebase = useFireBase();
  const navigate = useNavigate();

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then((result) => {
      setUrl(result);
    });
  }, []);

  return (
    <Card style={{width: 'auto'}} className="my-3">
      {url && (
        <Card.Img
          variant="top"
          style={{ height: "15rem", objectFit: "cover", objectPosition: 'top' }}
          src={url}
        />
      )}
      <Card.Body>
        <Card.Title>
          This book has a title {props.name} and this book is sold by{" "}
          {props.displayName} & this book cost ruppee {props.price}
        </Card.Title>
        <Card.Text>price of this is {props.price}</Card.Text>
        <Button
          onClick={(e) => navigate(props.link)}
          variant="dark"
        >
          {props.btnContent}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
