import React from "react";
import { Link } from "react-router-dom";

function CategoriesList({ categories }) {
  return (
    <div className="container d-flex flex-wrap justify-content-around">
      {categories.map((item, index) => {
        return (
          <div key={index}>
            <button className="shop-1 m-3">
            {item}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CategoriesList;
