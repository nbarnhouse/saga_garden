import React from 'react';
import PlantForm from '../PlantForm/PlantForm.jsx';
import PlantList from '../PlantList/PlantList.jsx';

function Garden() {
  return (
    <>
      <div>
        <PlantForm />
        <PlantList />
      </div>
      <div className="imageLogo">
        <img
          src="https://cdn.dribbble.com/userupload/2805494/file/original-67d7dbd7d47f48ad8883c12e87a3c241.png?resize=1024x768"
          alt="Cactus by Mako Zakaidze"
        />
      </div>
    </>
  );
}

export default Garden;
