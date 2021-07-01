import React, { Component } from "react";
import chef1 from "../../imgs/chef_1.jpg";
import chef2 from "../../imgs/chef_2.jpg";
import chef3 from "../../imgs/chef_3.jpg";
import Footer from "../Footer/Footer.jsx";

export default class Chef extends Component {
  render() {
    return (
      <>
        <div className="about-team mb-5 pt-5 text-center">
          <div className="container">
            <div className="about-head my-5">
              <p className="text-muted mb-1">CHEF</p>
              <h2 className="text-orange">Our Professional Chef</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>

            <div className="our-team">
              <div className="row">
                <div className="col-md-4">
                  <div className="team-card">
                    <img src={chef1} className="img-fluid" />
                    <h5>James Anderson</h5>
                    <p className="text-muted">Master Chef</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="team-card">
                    <img src={chef2} className="img-fluid" />
                    <h5>Mellissa White</h5>
                    <p className="text-muted">Cook</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="team-card">
                    <img src={chef3} className="img-fluid" />
                    <h5>Craig Gold</h5>
                    <p className="text-muted">Chef</p>
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