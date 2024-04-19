import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PlantList() {
  const dispatch = useDispatch();

  const plants = useSelector((store) => store.plantList);

  useEffect(() => {
    dispatch({ type: 'GET_PLANT' });
  }, []);

  return (
    <div>
      <h2>This is the plant list</h2>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default PlantList;
