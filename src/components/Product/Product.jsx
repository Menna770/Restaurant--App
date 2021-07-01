import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <>
        <div className="product m-auto text-center my-4">
          <div className="product-cart shadow-sm">
            <div className="product-cart-img">
              <img src={this.props.product.image_url} className="cart-img" />
              <small className="text-muted mt-1 mb-0 d-block">
                {this.props.product.name}
              </small>
              <small className="text-orange m-0 d-block">
                ${this.props.product.price.toFixed(2)}
              </small>
            </div>

            <div className="cart-btns">
              <div className="btns-border">
                <button
                  onClick={() => this.props.onIncreament(this.props.product)}
                  className="btn cart-icon text-orange btn-sm"
                >
                  +
                </button>

                <div className="cart-count px-3">{this.props.product.count}</div>

                <button
                  onClick={() => this.props.onDecreament(this.props.product)}
                  className="btn cart-icon text-orange btn-sm"
                >
                  -
                </button>
              </div>
            </div>

            <div className="cart-delete">
              <div
                onClick={() => this.props.onDelete(this.props.product)}
                className="btn btn-danger btn-sm"
              >
                <i class="fas fa-trash"></i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
