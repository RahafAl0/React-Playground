import { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvilableMeals';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;