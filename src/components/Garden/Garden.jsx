import React from 'react';
import PlantForm from '../PlantForm/PlantForm.jsx';
import PlantList from '../PlantList/PlantList.jsx';

function Garden() {
  return (
    <div>
      <h2>This is the garden!</h2>
      <PlantForm />
      <PlantList />
    </div>
  );
}

export default Garden;
