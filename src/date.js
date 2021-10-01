import React from "react";

export const Dates = () =>
{
    const date = new Date(Date.now());
    const localDate = date.toLocaleDateString();
    return <h1>{localDate}</h1>
}