import React, { Component } from "react";
import BookListItem from "../BookListItem";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

import "./book-list.css";

import { WithBookstoreService } from "../Hoc";

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem book={book} />
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
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} />;
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error
  };
};

const mapDispatchToProps = (dispacth, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispacth)
  };
};

export default compose(
  WithBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
