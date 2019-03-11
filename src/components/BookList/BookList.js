import React, { Component } from "react";
import BookListItem from "../BookListItem";
import { connect } from "react-redux";
import { fetchBooks, bookAddedToCart } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import { bindActionCreators } from "redux";

import "./book-list.css";

import { WithBookstoreService } from "../Hoc";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem
              onAddedToCart={() => onAddedToCart(book.id)}
              book={book}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart  } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return {
    books,
    loading,
    error
  };
};

const mapDispatchToProps = (dispacth, { bookstoreService }) => {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddedToCart: bookAddedToCart
    },
    dispacth
  );
};

export default compose(
  WithBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
