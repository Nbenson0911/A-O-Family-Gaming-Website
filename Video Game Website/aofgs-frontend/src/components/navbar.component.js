import React, { Component } from "react";
import { Link } from "react-router-dom";
import Aofgs from "../images/aofgs.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-danger"
          style={{ fontFamily: "Righteous, cursive", fontSize: "35px" }}
        >
          <a className="navbar-brand" href="/">
            <img src={Aofgs} className="navpic" />
          </a>
          <button
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/twitch">
                  Twitch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/youtube">
                  Youtube
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/facebooklive">
                  Facebook Live
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/donate">
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
