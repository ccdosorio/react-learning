import React, { Component } from "react";
import Button from '@mui/material/Button';
import Delete from "@mui/icons-material/Delete";

export class Country extends Component {
  delete = (name) => {
    this.props.onDelete(name);
  };

  componentWillUnmount() {
    console.log("componente desmontado");
  }

  render() {
    return (
      <li>
        <Button size="small" >
          <Delete onClick={() => this.delete(this.props.name)} />
        </Button>
        {this.props.name}
      </li>
    );
  }
}

export default Country;
