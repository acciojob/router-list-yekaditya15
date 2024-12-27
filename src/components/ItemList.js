import React from "react";
import { Link } from "react-router-dom";

const ItemList = () => {
  const items = [
    { id: 1, name: "Item 1", description: "Description of Item 1" },
    { id: 2, name: "Item 2", description: "Description of Item 2" },
    { id: 3, name: "Item 3", description: "Description of Item 3" },
  ];

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
