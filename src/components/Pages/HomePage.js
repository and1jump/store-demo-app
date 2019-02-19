import React from "react";
import BookList from "../BookList";
import CartTable from "../CartTable";

const HomePage = () => {
  return (
    <div>
      <BookList />
      <CartTable />
    </div>
  );
};

export default HomePage;
