import React from "react";
import { Link } from "react-router-dom";
export const EmployeeCards = ({data, remove}) =>
(
    <section className="employee">
    <h2>{data.name}</h2>
    <p>{data.address}</p>
    <button type="button" onClick={() =>remove(data.id)}>Remove</button>
    <Link to={`/employees/${data.id}`}>
    <button>Details</button>
   </Link>
   
    </section>

)