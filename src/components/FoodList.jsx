import { Row, Col, Card } from 'antd';
import React, { useState } from 'react';
import FoodData from '../foods.json';
import FoodCard from './FoodCard';
import AddFood from './AddFood';
import SearchBar from './SearchBar';

function FoodList() {
  const [food, setFood] = useState(FoodData);
  const [searchFood, setSearchFood] = useState(FoodData);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];
    setFood(updatedFood);
  };

  const searchFilter = (search) => {
    let filteredFood = food.filter((foods) => {
      return foods.name.toLowerCase().includes(search.toLowerCase());
    });

    setSearchFood(filteredFood);
  };

  const deleteFood = (foodName) => {
    let filteredFood = food.filter((foods) => {
      return foods.name !== foodName;
    });

    setFood(filteredFood);
    setSearchFood(filteredFood);
  };
  return (
    <div>
      <Row>
        <Col>
          <AddFood addFood={addNewFood} />
        </Col>

        <Col>
          <SearchBar searchFilter={searchFilter} />
          <h1>Food List</h1>
          <Row>
            {searchFood.map((el) => {
              return <FoodCard food={el} clickToDelete={deleteFood} />;
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default FoodList;
