import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "./Animal/AnimalList"
import { CustomerList } from "../Customer/CustomerList"
import { AnimalDetail } from "./Animal/AnimalDetail"
import { AllEmployees } from "../Employee/Employees"
import { EmployeesDetails } from "../Employee/EmployeeDetails"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
              <AnimalList />
            </Route>

            <Route path="/customers">
              <CustomerList />
            </Route>

            <Route exact path="/employees">
              <AllEmployees />
            </Route>

            <Route path="/animals/:animalId(\d+)">
  <AnimalDetail />
</Route>

<Route exact path="/employees/:employeesId(\d+)">
  <EmployeesDetails />
</Route>

{/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}

        </>
    )
}
