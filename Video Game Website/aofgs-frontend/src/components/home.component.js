import React, { Component } from "react";
import Controller from "../images/controller.png";
import Twitch from "../images/twitch.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="controller">
          <img src={Controller} className="img-fluid" alt="banner" />
        </div>
        <br />
        <h1 className="text-center mt-5">A&O Twitch Streaming</h1>
        <table className="table">
          <thead className="thead-light"></thead>
          <tbody>
            <div className="container">
              <div className="row">
                <div className="card m-4 align-center">
                  <img
                    className="card-top img-fluid"
                    src={Twitch}
                    alt="Card-cap"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Come Watch Our Twitch Livestream!{" "}
                    </h5>
                    <p className="card-text text-center">
                      A&O Gaming is on Twitch! Come Check Us Out!
                    </p>
                    <div className="col text-center">
                      <a href="/twitch" className="btn btn-success center">
                        Let's Go!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tbody>
        </table>
      </div>
    );
  }
}
