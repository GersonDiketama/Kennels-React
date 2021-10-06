import React,{useState, useEffect} from "react";
import { PropsAndState } from './PropsAndState'
import { Dates } from "./date";
import { GetQuotes} from "./Quotes";
import { getRandomId } from "./modules/AnimalManager";
import { getAnimalById } from "./modules/AnimalManager";
import { AnimalSpotlight } from "./Components/Animal/AnimalSpotLight";



export const Home = () => {

    const [spotlightId, setSpotlightId] = useState(0);
    const [animal, setAnimal] = useState({});

    const refreshSpotlightAnimal = () => {
      getRandomId().then(setSpotlightId);
    };
  
    useEffect(() => {
      refreshSpotlightAnimal();
    }, [animal]);

    // useEffect(() => {
    //     getAnimalById(animalId).then(animal => {
    //       setAnimal(animal);
    //     });
    //   }, [animalId]);
    

    return(
    <>

        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
        <PropsAndState yourName={"Brenda"} />
        <Dates/>
        <GetQuotes/>
        
        
    
    
    </>
    )
    }
