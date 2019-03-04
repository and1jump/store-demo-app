import updateBookList from "./BookList";
import updateShoppingCart from "./ShoppingCart";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
