import React, {useState,useEffect } from 'react';
import { getAllAnimals, deleteAnimal} from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';
import { useHistory } from 'react-router';

export const AnimalList = () => {

const [animals, setAnimals] = useState([]);
const history = useHistory();



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

  const handleDeleteAnimal = id => {
    deleteAnimal(id)
    .then(() => getAllAnimals().then(setAnimals));
};

  return (
      <>

    {/* //add this button above your display of animal cards */}
    <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {history.push("/animals/create")}}>
      Admit Animal
  </button>
</section>

    <div className="container-cards">
        {console.log("return timeee")}
        {animals.map(animal => <AnimalCard key={animal.id} name={animal} handleDeleteAnimal={handleDeleteAnimal}/>)}
    

    </div>

</>

  );
};
//name inside the AnimalCard holds the data from API, which is named animal