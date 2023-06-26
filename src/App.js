import React, { Component } from "react";

import Header from "./components/Header";
import NewDish from "./components/NewDish";
import Dishes from "./components/Dishes";

import data from "./assets/data/dishes.json";

import "./styles/App.css";

class App extends Component {
  state = {
    dish: "tacos",
    dishes: data,
  };

  showDishes = (e) => {
    e.preventDefault();
    this.props.history.push("/platillos");
  };

  updateDish = (index, updatedName) => {
    let newState = { ...this.state };
    newState.dishes.dishes[index].name = updatedName;

    this.setState(newState);
  };

  addDish = (dishName) => {
    let newState = { ...this.state };
    const newDish = {
      id: newState.dishes.dishes.length,
      name: dishName,
      country: "Mexico",
      ingredients: ["Semillas", "Pollo", "Arroz"],
    };

    newState.dishes.dishes.push(newDish);

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <NewDish onAddDish={this.addDish} />
        <Dishes data={this.state.dishes} onUpdateDish={this.updateDish} />
      </div>
    );
  }
}

export default App;
