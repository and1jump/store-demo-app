import React, { Component } from "react";
import BookListItem from "../BookListItem";
import { connect } from "react-redux";
import { booksLoaded } from "../../actions";
import { compose } from "../../utils";

import "./book-list.css";

import { WithBookstoreService } from "../Hoc";

class BookList extends Component {
  componentDidMount() {
    // 1. receive data
    
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    // 2. dispacth action to store
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <ul>
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

const mapStateToProps = ({ books }) => {
  return {
    books
  };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  WithBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
