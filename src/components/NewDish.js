import React, { Component } from "react";

import { Fab, TextField } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

class NewDish extends Component {
  //   constructor() {
  // Enlazar (binding) la funcion a la clase, mejor usar arrow functions
  //     super();
  //     this.addDish = this.addDish.bind(this);
  //   }

  newDish = React.createRef();

  addDish = (e) => {
    e.preventDefault();
    // console.log(this);
    // console.log(this.newDish.current.value);
    console.log(this.newDish.value);
    this.props.onAddDish(this.newDish.value);
    this.newDish.value = "";
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.addDish}>
        {/* <input type="text" ref={this.newDish}/> */}
        <TextField
          label="Platillo..."
          type="text"
          margin="normal"
          variant="outlined"
          //   inputRef={this.newDish}
          inputRef={(e) => (this.newDish = e)}
        />
        <Fab
          color="primary"
          size="medium"
          className="dish-form-icon"
          onClick={this.addDish}
        >
          <AddIcon />
        </Fab>
      </form>
    );
  }
}

export default NewDish;
