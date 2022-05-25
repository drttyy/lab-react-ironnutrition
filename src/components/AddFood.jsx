import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFood(props) {
  const { addFood } = props;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  //Handler forms

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    console.log(newFood);
    addFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
    alert(`${newFood.name} added to the list!`);
  };

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input type="text" name="name" value={name} onChange={handleName} />

      <label htmlFor="image">Image</label>
      <Input type="text" name="image" value={image} onChange={handleImage} />

      <label htmlFor="calories">Calories</label>
      <Input
        type="number"
        name="calories"
        value={calories}
        onChange={handleCalories}
      />

      <label htmlFor="servings">Servings</label>
      <Input
        type="number"
        name="servings"
        value={servings}
        onChange={handleServings}
      />
      <button type="sumbit">Create</button>
    </form>
  );
}

export default AddFood;
