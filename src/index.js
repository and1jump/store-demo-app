import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "../src/components/App";
import ErrorBoudry from "../src/components/ErrorBoundry";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "../src/components/BookstoreServiceContext";

import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoudry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoudry>
  </Provider>,
  document.getElementById("root")
);
