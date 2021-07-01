import React, { Component } from "react";
import eventsImg from "../../imgs/events.jpg";
import Footer from "../Footer/Footer.jsx";

class Home extends Component {
  render() {
    return (
      <>
        {/* Header */}
        <header>
          <div className="header-overlay">
            <div className="header-head">
              <p>Enjoy your healty delicious meal</p>
              <h1>Treat Yourself</h1>
              <p>
                Another free template by Colorlib. Far far away, behind the word
                mountains, far from the countries Vokalia and Consonantia, there
                live the blind texts.
              </p>
            </div>
          </div>
        </header>

        {/* Events */}
        <section className="events py-4 mb-5 text-center">
          <div className="container">
            <div className="events-head my-5">
              <p className="text-muted">EVENTS</p>
              <h2 className="text-orange">Enjoy Our Events</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>

            <div className="row">
              <div className="col-md-5 offset-md-1">
                <div>
                  <img src={eventsImg} className="img-fluid event-img" />
                </div>
              </div>
              <div className="col-md-5 offset-md-1">
                <div className="text-left">
                  <h6 className="text-orange font-italic fa-2x">
                    $200.99
                  </h6>
                  <h3 className="text-gray">Birthday Party</h3>
                  <p className="my-3">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i class="fas fa-check mr-2"></i> Away behind the word
                    </li>
                    <li>
                      <i class="fas fa-check mr-2"></i> Bookmarksgrove right at
                      the coast
                    </li>
                    <li>
                      <i class="fas fa-check mr-2"></i> Separated they live
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Table */}
        <section className="book-table text-center">
          <div className="book-table-overlay py-5 ">
            <div className="container">
              <div className="book-table-body py-5">
                <p className="text-muted">BOOK A TABLE</p>
                <h3 className="text-gray">Book A Table Now</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="btn myBtn mt-3">Book Now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Footer */}
        <section className="main-footer py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-item px-md-5">
                  <h6>About Meal</h6>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="social my-4">
                    <h6>Social</h6>
                    <div className="contact-icons">
                      <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-github"></i>
                      <i class="fab fa-linkedin-in"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-item">
                  <h6>Projects</h6>
                  <ul className="list-unstyled text-gray ">
                    <li>Html</li>
                    <li>Css</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-item">
                  <h6>Services</h6>
                  <ul className="list-unstyled text-gray ">
                    <li>Design</li>
                    <li>Develope</li>
                    <li>Code</li>
                    <li>Front End</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-item">
                  <h6>Contact</h6>
                  <ul className="list-unstyled text-gray ">
                    <li>43 Raymouth Rd. Baltemoer, London 3910</li>
                    <li>+1(123)-456-7890</li>
                    <li>meal@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Home;
