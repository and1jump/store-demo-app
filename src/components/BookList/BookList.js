import React, { Component } from "react";
import BookListItem from "../BookListItem";
import { connect } from "react-redux";
import { booksLoaded, booksRequested } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../Spinner";

import "./book-list.css";

import { WithBookstoreService } from "../Hoc";

class BookList extends Component {
  componentDidMount() {
    // 1. receive data
    // 2. dispacth action to store
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks().then(data => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

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
  }
}

const mapStateToProps = ({ books, loading }) => {
  return {
    books,
    loading
  };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
};

export default compose(
  WithBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
