import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "./../Product/Product";
import emptyCart from "../../imgs/cart-impty2.PNG";
import orderDone from "../../imgs/order-done.png";
import { Button } from "bootstrap";

class ShoppingCart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      closeClass: "order-done-box d-none"
    }
  }

  openBox = (e) => {
    this.setState({
      closeClass : "order-done-box d-flex"
    })
  }

  closeBox = (e) => {
    this.setState({
      closeClass : "order-done-box d-none"
    })
  }


  render() {

    const { products, onDecreament, onIncreament, onDelete, onReset } =
      this.props;

    let total = this.props.products.reduce((x, y) => x + y.price * y.count, 0);

    return (
      <>
        <div className="text-center mb-5 pt-5">
          <div className="container">
            <div className="cart-head mt-5 mb-3">
              <p className="text-muted mb-1">CART</p>
              <h2 className="text-orange mb-5">Your Food Cart</h2>
            </div>

            {products.length === 0 && (
              <div className="text-center mt-3">
                <img src={emptyCart} className="img-fluid rounded-circle" />
                <p className="text-gray">
                  Ops, Your Food Cart Is Empty
                  <br />
                  Go to{" "}
                  <Link className="go-to-menu" to="/menu">
                    Menu
                  </Link>
                </p>
              </div>
            )}

            {products.map((prdct) => (
              <Product
                key={prdct.id}
                product={prdct}
                onDelete={onDelete}
                onIncreament={onIncreament}
                onDecreament={onDecreament}
              />
            ))}

            {products.length > 0 && (
              <div className="total m-auto text-center my-5 pt-4">
                <h4 className="text-orange">
                  Total:
                  <span className="text-gray"> $ {total.toFixed(2)}</span>
                </h4>
                <button onClick={this.openBox} className="btn go-to-menu order-done-btn mt-3" > 
                  Place Order
                </button>
              </div>
            )}


            {/* Order Done Box (D-none/flex*/}
            <div className={this.state.closeClass}>
              <div className="order-done-content">

                <div className="order-done-img">
                  <img src={orderDone} className="img-fluid" width="300" height="300" />
                </div>

                <div className="order-done-info mt-3">
                  <h5>Your order is successfully</h5>
                  <Link className="go-to-menu btn order-done-btn mt-1" to="/menu">
                    Continue Shopping
                  </Link>
                  <small onClick={this.closeBox} className="closeBox text-muted d-block mt-4">
                    Back to cart!
                  </small>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShoppingCart;
