import { remoteURL } from "../modules/AnimalManager";

export const addLocation = () =>
{
    return fetch(`${remoteURL}/locations`)
    .then(response => response.json())
}


export const newLocation = (newLocal) =>
{
    return fetch(`${remoteURL}/locations`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(newLocal)

    })
    .then(response => response.json())
}