import React from 'react';
export default function FruitPicker(){
  return(
    <label>
      Pick a fruit:
      <select name="selectedFruit" defaultValue="orange">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
      </select>
    </label>
  ) 
}
