import React from "react";

const Total = ({ items }) => (
  <div className="total">
    Total: $
    {items.length
      ? items.reduce((acc, item) => acc + item.total * item.count, 0).toFixed(2)
      : Number(0).toFixed(2)}
  </div>
);

export default Total;
