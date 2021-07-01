import "./App.css";

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PageTransition from 'react-router-page-transition';

import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Chef from "./components/Chef/Chef.jsx";
import Menu from "./components/Menu/Menu.jsx";
import ShoppingCart from "./components/shoppingCart/shoppingCart.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";


class App extends Component {

  state = {
    types: [
      { id: 0, name: "All" },
      { id: 1, name: "Pizza" },
      { id: 2, name: "Pasta" },
      { id: 3, name: "Cake" }
    ],

    products: [
      {
        id: 1,
        typeId: 2,
        name: "Pesto Cream",
        price: 65,
        count: 1,
        isInCart: false,
        image_url: "https://forkify-api.herokuapp.com/images/pestoa0e7.jpg"
      },
      {
        id: 2,
        typeId: 1,
        name: "Pizza Dough",
        price: 50,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
      },
      {
        id: 3,
        typeId: 2,
        name: "Shrimp Scampi",
        price: 30,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/scampibf5a.jpg"
      },
      {
        id: 4,
        typeId: 1,
        name: "Fruit Pizza",
        price: 55,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg"
      },
      {
        id: 5,
        typeId: 3,
        name: "Black-Tea Cake",
        price: 75,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/8490340733_91c07b6f0c_b149f.jpg"
      },
      {
        id: 6,
        typeId: 3,
        name: "Pumpkin Pancakes",
        price: 35,
        count: 1,
        isInCart: false,
        image_url:  "http://forkify-api.herokuapp.com/images/pumpkinpancakes32a8.jpg"
      },
      {
        id: 7,
        typeId: 3,
        name: "Brownies",
        price: 60,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/browniesf86b.jpg"
      },
      {
        id: 8,
        typeId: 1,
        name: "Sweet Potato",
        price: 75,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg"
      },
      {
        id: 9,
        typeId: 2,
        name: "Baked Ziti",
        price: 50,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/14573f089.jpg"
      },
      {
        id: 10,
        typeId: 3,
        name: "Cadbury Cupcakes",
        price: 85,
        count: 1,
        isInCart: false,
        image_url: "https://forkify-api.herokuapp.com/images/988275fbb0.jpg"
      },
      {
        id: 11,
        typeId: 1,
        name: "Quesadilla Pizzas",
        price: 70,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg"
      },
      {
        id: 12,
        typeId: 3,
        name: " Mint Cheesecake",
        price: 90,
        count: 1,
        isInCart: false,
        image_url:  "http://forkify-api.herokuapp.com/images/79484833e4.jpg"
      },
      {
        id: 13,
        typeId: 2,
        name: "Pasta Carbonara",
        price: 45,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/chickenalfredoc9c5.jpg"
      },
      {
        id: 14,
        typeId: 3,
        name: "Rolo Brownies",
        price: 85,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/rolobrownies9765.jpg"
      },
      {
        id: 15,
        typeId: 2,
        name: "Lasagna",
        price: 60,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/Lasagna2BSoup2B5002B050668ba78b8.jpg"
      },
      {
        id: 16,
        typeId: 2,
        name: "Alfredo",
        price: 80,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/PastaCarbonara061c.jpg"
      },
      {
        id: 17,
        typeId: 3,
        name: "Banana-Chocolate",
        price: 65,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/51117350b449.jpg"
      },
      {
        id: 18,
        typeId: 1,
        name: "Pizza Burger",
        price: 35,
        count: 1,
        isInCart: false,
        image_url: "http://forkify-api.herokuapp.com/images/pizzaburgera5bd.jpg"
      }
    ],

    pageSize: 6,
    activePage: 1,
    activeFilter: 0,
  };

  handleDelete = (product) => {
    let newP = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products: newP });
    this.addToLocalStorage(newP);
  };


  handleRest = () => {
    const products = [...this.state.products];
    products.map((p) => {
      p.count = 0;
      return p;
    });

    this.setState({ products });
  };


  handleIncreament = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].count++;

    this.setState({ products });
  };


  handleDecreament = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);

    if (products[index].count == 1) {
      products[index].count = 1;
    } else {
      products[index].count--;
    }

    this.setState({ products });
  };


  handleCartChange = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].isInCart = !products[index].isInCart;

    this.setState({ products });
  };


  handlePageChange = (page) => {
    this.setState({ activePage: page });
  };

  handleFilterChange = (type) => {
    this.setState({ activeFilter: type.id });
  };


  render() {
    return (
      <>
        <Navbar count={this.state.products.length} />
        
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/chef" component={Chef} />

          <Route
            path="/cart"
            render={(props) => (
              <ShoppingCart
                {...props}
                products={this.state.products.filter((p) => p.isInCart)}
                onDelete={this.handleCartChange}
                onIncreament={this.handleIncreament}
                onDecreament={this.handleDecreament}
                onReset={this.handleRest}
              />
            )}
          />

          <Route
            path="/menu"
            render={(props) => (
              <Menu
                types={this.state.types}
                products={this.state.products}
                pageSize={this.state.pageSize}
                activePage={this.state.activePage}
                activeFilter={this.state.activeFilter}
                onCartChagne={this.handleCartChange}
                onPageChange={this.handlePageChange}
                onFilterChange={this.handleFilterChange}
              />
            )}
          />

          <Route path="/notfound" component={NotFound} />
          <Route path="/home" exact component={Home} />

          <Redirect exact from="/Restaurant--App" to="/home" />
          <Redirect exact from="/" to="/home" />
          <Redirect from="*" to="/notfound" />
        </Switch>
      </>
    );
  }
}

export default App;
