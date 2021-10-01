import React from "react"
import "./Animal.css"


export const AnimalCard = ({name}) => (
    <section className="animal">
        <h3 className="animal__name">{name.name}</h3>
        <div className="animal__breed">Breed: {name.breed}</div>
    </section>
)
