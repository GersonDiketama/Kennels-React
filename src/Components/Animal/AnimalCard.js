import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({name, handleDeleteAnimal}) => (
    <section className="animal">
        <h3 className="animal__name">{name.name}</h3>
        <div className="animal__breed">Breed: {name.breed}</div>
        <button type="button" onClick={() => handleDeleteAnimal(name.id)}>Discharge</button>

    <Link to={`/animals/${name.id}`}>
  <button>Details</button>
</Link>
    </section>
)
