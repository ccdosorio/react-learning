import React, { Component } from "react";
import { Country } from "./Country";
import Button from "@mui/material/Button";

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    this.getCountries();
  }

  getCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ countries: data });
      })
      .catch((error) => console.log(error));
  };

  delete = (name) => {
    let newState = { ...this.state };

    newState.countries = newState.countries.filter(
      (country) => country.name.common !== name
    );

    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h1>Paises</h1>
        <Button variant="contained" color="secondary">
          Cargar lista
        </Button>
        <ul>
          {this.state.countries.map((country, index) => (
            <Country
              key={index}
              name={country.name.common}
              onDelete={this.delete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Countries;
