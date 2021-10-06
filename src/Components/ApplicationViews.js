import React, {useState} from "react"
import { Route } from "react-router-dom"
import { Redirect } from "react-router"
import { Home } from "../Home"
import { AnimalList } from "./Animal/AnimalList"
import { CustomerList } from "../Customer/CustomerList"
import { AnimalDetail } from "./Animal/AnimalDetail"
import { AllEmployees } from "../Employee/Employees"
import { EmployeesDetails } from "../Employee/EmployeeDetails"
import { AnimalForm } from "./Animal/AnimalForm"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { AnimalEditForm } from "./Animal/AnimalEditForm"
import { GetLocalation } from "../Location/LocationList"
import { NewLocation } from "../Location/LocationForm"
import { newLocation } from "../Location/LocationManager"

export const ApplicationViews = () => {

  
const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

const setAuthUser = (user) => {
	sessionStorage.setItem("kennel_customer", JSON.stringify(user))
	setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
}



    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* <Route exact path="/">
                <Home />
            </Route> */}

            <Route exact path="/locations">
                <GetLocalation />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            {/* <Route exact path="/animals">
              <AnimalList />
            </Route> */}

            <Route path="/customers">
              <CustomerList />
            </Route>

            <Route exact path="/employees">
              <AllEmployees />
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
  <AnimalDetail />
</Route>

<Route exact path="/employees/:employeesId(\d+)">
  <EmployeesDetails />
</Route>


{/*Location Form  */}

<Route exact path="/locations/create">
  <NewLocation />
</Route>


{/* // Our shiny new route. */}
<Route exact path="/animals/create">
  <AnimalForm />
</Route>



{/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}

<Route exact path="/">            
	{isAuthenticated ? <Home/> : <Redirect to="/login" />}
</Route>

<Route exact path="/animals">
	{isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
</Route>

<Route exact path="/customers">
	{isAuthenticated ? <CustomerList /> : <Redirect to="/login" />}
</Route>


<Route exact path="/employees">
	{isAuthenticated ? <AllEmployees /> : <Redirect to="/login" />}
</Route>

<Route path="/login">
	<Login setAuthUser={setAuthUser}/>
</Route>

<Route path="/register">
	<Register setAuthUser={setAuthUser}/>
</Route>

{/* EDit logic */}
<Route path="/animals/:animalId(\d+)/edit">
      {isAuthenticated ? <AnimalEditForm /> : <Redirect to="/login" />}
</Route>

        </>
    )
}
