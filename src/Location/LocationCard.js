import React from "react";

export const Location = ({data}) =>
(
    <>
    <h2>{data.name}</h2>
    <p>{data.address}</p>
    </>
)