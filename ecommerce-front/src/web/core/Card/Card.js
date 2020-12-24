import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "../ShowImage";

const Card = ({ product }) => {
  const { name, description, price } = product;

  return (
    <div className="cardItem">
      <div style={{ backgroundColor: "lightGrey" }}>{name}</div>
      <div>
        {description.length > 10 ? (
          <p>{description.substring(0, 25)}...</p>
        ) : (
          <p>{description}</p>
        )}

        <ShowImage item={product} url="product" />
        <p>${price}</p>
        <Link to="/">
          <button>View</button>
        </Link>
        <button>Add to card</button>
      </div>
    </div>
  );
};

export default Card;
