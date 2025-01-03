import React, {useState} from "react";

const Item = ({id, name, qty}) => {
  return (
    <ul>
      <li>Product Name: {name}</li>
      <li>Product quantity: {qty}</li>
    </ul>
  );
};

export default Item;