const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST"
  };
};

const booksLoaded = newBooks => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
  };
};

const booksError = error => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error
  };
};

const fetchBooks = (bookstoreService, dispacth) => () => {
  dispacth(booksRequested());
  bookstoreService
    .getBooks()
    .then(data => dispacth(booksLoaded(data)))
    .catch(err => dispacth(booksError(err)));
};

export { fetchBooks };
