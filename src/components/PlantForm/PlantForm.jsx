import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const PlantForm = () => {
  const dispatch = useDispatch();

  let [name, setName] = useState('');

  const addNewPlant = (event) => {
    event.preventDefault();
    console.log('Plant Name:', name);

    dispatch({
      type: 'POST_PLANT',
      payload: {
        name: name,
      },
    });

    setName('');
  };
  return (
    <div>
      <h2>This is the form</h2>
      <form onSubmit={addNewPlant}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input type="submit" value="Add New Plant" />
      </form>
    </div>
  );
};

export default PlantForm;
