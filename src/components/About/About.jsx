import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

class About extends Component {
  render() {
    return (
      <>
        <div className="about-us mb-5 pt-5">
          <div className="container">
            <div className="about-head my-5">
              <p className="text-muted mb-1">About</p>
              <h2 className="text-orange">Why Choose Us</h2>
            </div>

            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="about-us-card">
                    <p className="text-orange font-weight-bold mb-1">0 1</p>
                    <h5>Delicious Food</h5>
                    <p className="text-gray mt-3">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about-us-card">
                    <p className="text-orange font-weight-bold mb-1">0 2</p>
                    <h5>Expert Chefs</h5>
                    <p className="text-gray mt-3">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about-us-card">
                    <p className="text-orange font-weight-bold mb-1">0 3</p>
                    <h5>Friendly People</h5>
                    <p className="text-gray mt-3">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about-us-card">
                  <p className="text-orange font-weight-bold mb-1">0 4</p>
                    <h5>Parties</h5>
                    <p className="text-gray mt-3">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default About;
