import React from "react";
import Singleproduct from "./Singlecategoryp";

const SingleCategory = ({ cats }) => {
  // Check if 'cats' is not undefined and has at least one element
  if (!cats || cats.length === 0) {
    return <p>No category data available</p>;
  }

  const categories = cats[0];

  return (
    <div className="bigproduct">
      <Singleproduct productcat={categories} />
    </div>
  );
};

export default SingleCategory;
