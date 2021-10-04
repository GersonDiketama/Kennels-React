import React, {useState, useEffect} from "react";
import { employees, deleteEmployees } from "../modules/AnimalManager";
import { EmployeeCards } from "./EmployeesCards";


export const AllEmployees = () =>
{
    const[workers, setEmployees] = useState([])

    const getEmployees = () =>
    {
       
        employees().then(response => setEmployees(response))
    }

    const removeEmployees = (id) =>
    {
        deleteEmployees(id).then(getEmployees)
    }

    useEffect(() =>{getEmployees()},[])



    return(
        <div className="employees">
            {workers.map(work => <EmployeeCards key={work.id} data={work} remove={removeEmployees}/>)}
        </div>
    )
}
