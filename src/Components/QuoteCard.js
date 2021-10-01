import React from "react";

export const QuoteCards = ({quote}) =>
(
    <section>
        {console.log("QuoteCards")}
     <p>quote card</p>
        <p>{quote?.text}</p>
        <h3>{quote?.author}</h3>
    </section>
)