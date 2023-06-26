import React from "react";
// import { useNavigate } from "react-router-dom";

import { Grid } from "@mui/material";
import Dish from "./Dish";

const Dishes = (props) => {
  // const navigate = useNavigate();

  // const goBack = () => {
  //   navigate("/");
  // };

  const updateDish = (index, updatedName) => {
    props.onUpdateDish(index, updatedName);
  };

  return (
    <div>
      <h1>Platillos</h1>
      {/* <Button variant="contained" color="secondary" onClick={goBack}>
        Regresar
      </Button> */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        alignItems="center"
      >
        {props.data.dishes.map((dish, index) => (
          <Grid item xs={6} key={index}>
            <Dish
              name={dish.name}
              ingredients={dish.ingredients}
              index={index}
              onUpdateDish={updateDish}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dishes;
