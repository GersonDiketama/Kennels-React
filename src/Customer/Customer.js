import React from "react";

export const Customer = ({data}) =>{
return(
    <section>
        <h2>{data.name}</h2>
        <p>{data.address}</p>
    </section>
)
}