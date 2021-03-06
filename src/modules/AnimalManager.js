

export const remoteURL = "http://localhost:5002"

export const getAnimalById = (animalId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/animals/${animalId}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

export const getEmployeesById = (employeesId) =>
{
  return fetch(`${remoteURL}/employees/${employeesId}?_expand=animal&_expand=location`)
  .then(response => response.json())
}

export const getAllAnimals = () => {
  return fetch(`${remoteURL}/animals`)
  .then(res => res.json())
}

export const getCustomers = () =>
{
    return fetch(`${remoteURL}/customers`)
    .then(response => response.json())
}

export const getLocations = () =>
{
    return fetch(`${remoteURL}/locations`)
    .then(response => response.json())
}

export const quotes = () =>
{
    return fetch(` https://type.fit/api/quotes`)
    .then(response => response.json())
} 


export const employees = () =>
{
  return fetch(`${remoteURL}/employees`)
  .then(response => response.json())
}

//delete
export const deleteEmployees = (id) =>
{
  return fetch(`${remoteURL}/employees/${id}`, {method:"DELETE"})
  .then(response => response.json())
}

export const deleteAnimal = (id) => {
  return fetch(`${remoteURL}/animals/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}



//adding post for Animal

export const addAnimal = (newAnimal) => {
  return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
  }).then(response => response.json())
}


// Edit manager

export const update = (editedAnimal) => {
  return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedAnimal)
  }).then(data => data.json());
}





// Add this method to the AnimalManager
export const getRandomId = () => {
  return fetch(`${remoteURL}/animals`)
    .then(result => result.json())
    .then(animals => {
      const randomIndex = Math.floor(Math.random() * animals.length);
      const randomAnimal = animals[randomIndex];
      return randomAnimal.id;
  });
}
