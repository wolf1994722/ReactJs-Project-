import React, { useEffect, useState } from "react";
import { useFireBase } from "../contexts/firebaseState";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = ({
  displayName,
  imageURL,
  isbnNumber,
  name,
  photoURL,
  price,
  userEmail,
  userID,
}) => {
  const [url, setUrl] = useState(null)
  const firebase = useFireBase();

  useEffect(() => {
    firebase.getImageURL(imageURL).then(result => {
      setUrl(result)
    })
  }, [])
  

  return (
    <Card style={{width: '18rem'}}>
      {url && <Card.Img variant="top" src={url} />}
      <Card.Body>
        <Card.Title>
          This book has a title {name} and this book is sold by {displayName} &
          this book cost ruppee {price}
        </Card.Title>
        <Card.Text>price of this is {price}</Card.Text>
        <Button variant="dark">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
