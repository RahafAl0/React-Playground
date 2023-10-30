import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import {
  carsReducer,
  changeSearchTerm,
  removeCar,
  addCar,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: carsReducer,
  form: formReducer
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm }
