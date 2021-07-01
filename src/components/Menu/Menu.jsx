import React, { Component } from "react";
import _, { lowerFirst } from "lodash";
import Cart from "../Cart/Cart";
import Pagination from "../Pagination/Pagination.jsx";
import Filter from "../Filter/Filter.jsx";
import Footer from "../Footer/Footer.jsx";

class Menu extends Component {

  render() {
    //Filter:
    let FilteredProducts = this.props.products;
    if (this.props.activeFilter)
      FilteredProducts = this.props.products.filter(
        (p) => p.typeId === this.props.activeFilter
      );

    //Pagination:
    const startIndex = (this.props.activePage - 1) * this.props.pageSize;
    const showedProducts = _(FilteredProducts)
      .slice(startIndex)
      .take(this.props.pageSize)
      .value();

    return (
      <>
        <div className="menu m-auto text-center mb-5 pt-5 pb-3">

          <div className="menu-head my-5">
            <p className="text-muted mb-1">MENU</p>
            <h2 className="text-orange mb-5">Our Delicious Menu</h2>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="px-3 mb-5">
                <Filter
                  types={this.props.types}
                  activeFilter={this.props.activeFilter}
                  onFilterChange={this.props.onFilterChange}
                />
              </div>
            </div>

            <div className="col">
              <div className="items-container">
                <div className="row">
                  {showedProducts.map((prdct) => (
                    <div key={prdct.id} className="col-md-4">
                      <div className="card mb-4">
                        <img src={prdct.image_url} className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            {prdct.name}
                          </h5>

                          <div className="d-flex justify-content-between">
                            <div className="badge p-2">$ {prdct.price}</div>
                            <div className="cart-icon">
                              <Cart
                                product={prdct}
                                onCartChagne={this.props.onCartChagne}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {this.props.products.length > this.props.pageSize && (
                  <Pagination
                    activePage={this.props.activePage}
                    pageCount={FilteredProducts.length / this.props.pageSize}
                    onPageChange={this.props.onPageChange}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Menu;
