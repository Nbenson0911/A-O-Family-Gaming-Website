import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Twitch from "./components/twitch.component";
import Footer from "./components/footer.component";

import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-style">
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/twitch" exact component={Twitch} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
