const booksLoaded = newBooks => {
  return {
    type: "BOOK_LOADED",
    payload: newBooks
  };
};

export { booksLoaded };
