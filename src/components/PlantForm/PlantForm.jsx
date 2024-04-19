import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const PlantForm = () => {
  const dispatch = useDispatch();

  let [newPlant, setPlant] = useState('');

  const addNewPlant = (event) => {
    event.preventDefault();
    dispatch({
      type: 'POST_PLANT',
      payload: {
        newPlant: newPlant,
      },
    });

    setPlant('');
  };
  return (
    <div>
      <h2>This is the form</h2>
      <form onSubmit={addNewPlant}>
        <input
          type="text"
          value={newPlant}
          onChange={(event) => setPlant(event.target.value)}
        />
        <input type="submit" value="Add New Plant" />
      </form>
    </div>
  );
};

export default PlantForm;
