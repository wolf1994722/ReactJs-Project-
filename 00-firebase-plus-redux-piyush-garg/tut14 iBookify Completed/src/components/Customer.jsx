import React from "react";

const Customer = (props) => {
  return (
    <tr>
      <th scope="row">{props.id + 1}</th>
      <td>{props.userEmail}</td>
      <td>{props.userID}</td>
      <td>{props.quantity}</td>
    </tr>
  );
};

export default Customer;
