import React, { Component } from "react";
import notFound from "../../imgs/not-found.png";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <div className="text-center mx-auto mt-5 w-75">
          <div className="container">
            <div className="notFound-head mt-5">
              <p className="text-muted mb-1">Opss!</p>
              <h2 className="text-orange mb-1">Page Not Found!</h2>
            </div>
            <img src={notFound} className="img-fluid mt-5" width="600" height="600"/>
          </div>
        </div>
      </>
    );
  }
}
