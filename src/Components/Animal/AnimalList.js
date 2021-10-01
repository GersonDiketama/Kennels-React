import React, {useState,useEffect } from 'react';
import { getAllAnimals} from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';

export const AnimalList = () => {

const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return getAllAnimals().then(animalsFromAPI => {
      // We'll do something more interesting with this data soon.
      setAnimals(animalsFromAPI)
      console.log(animalsFromAPI);
    });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div className="container-cards">
        {console.log("return timeee")}
        {animals.map(animal => <AnimalCard key={animal.id} name={animal}/>)}
      We'll put some animals here eventually...
    </div>
  );
};
//name inside the AnimalCard holds the data from API, which is named animal