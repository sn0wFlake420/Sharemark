import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import Editor from "./Components/Editor";
import Store from "./Store/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Store>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/editor" component={Editor} />
        <ToastContainer />
      </Router>
    </Store>
  );
};
export default App;
