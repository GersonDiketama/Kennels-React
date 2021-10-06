import React from "react"
import { useHistory } from "react-router"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({name, handleDeleteAnimal}) => 
   {
    const history = useHistory()
       return(
    <section className="animal">
         <img src={name.img}  alt="dogs"/>
        <h3 className="animal__name">{name.name}</h3>
        <div className="animal__breed">Breed: {name.breed}</div>
        <button type="button" onClick={() => handleDeleteAnimal(name.id)}>Discharge</button>
        <button type="button"
    onClick={() => history.push(`/animals/${name.id}/edit`)}>Edit
</button>


    <Link to={`/animals/${name.id}`}>
  <button>Details</button>
</Link>
    </section>
          )   }

