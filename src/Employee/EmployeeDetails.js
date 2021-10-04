import React,{useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import { getEmployeesById } from "../modules/AnimalManager";

export const EmployeesDetails = () =>
{
    const[getEmployee, setEmployee] = useState({name:"", address:"", animalName:"", location:""})

    const{employeesId} = useParams();

    useEffect(()=>{getEmployeesById(employeesId).then(employee => { 
        console.log(employee)
        setEmployee({name: employee.name, address: employee.address,          animalName: employee.animal.name, location: employee.location.address});
    })
},[employeesId])

        return(
            <section>
                <h3>{getEmployee.name}</h3>
                <div>{getEmployee.address}</div>

                <div>Animal:{getEmployee.animalName}</div>
                <div>Address:{getEmployee.location}</div>
            </section>
        )
}