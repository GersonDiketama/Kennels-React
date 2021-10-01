import React, { useState, useEffect } from "react";
import { getCustomers } from "../modules/AnimalManager";
import { Customer } from "./Customer";

export const CustomerList = () => {
  const [customer, setCustomer] = useState([]);
console.log(customer)
  const getAllCustomer = () => {
    return getCustomers().then((allCustomerApi) => {
      console.log("hello", allCustomerApi);
      setCustomer(allCustomerApi);
    });
  };
  useEffect(() => {
    getAllCustomer();
  }, []);

  return (
    <div>
        Hello
      {customer.map(customers => 
        <Customer key={customers.id} data={customers} />
      )}
    </div>
  );
};
