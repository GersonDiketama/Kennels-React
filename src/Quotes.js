import React, { useState, useEffect } from "react";
import { quotes } from "./modules/AnimalManager";
import { QuoteCards } from "./Components/QuoteCard";

export const GetQuotes = () => {
  const [myQuotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});

  const allQuotes = () => {
      console.log("AllQuotes")
    return quotes().then((response) => {
      setQuotes(response);
      console.log(response);
    });
  };

  const handle = () => {
      console.log("handle")
    setQuote(myQuotes[Math.floor(Math.random() * myQuotes.length)]);
  };


  useEffect(() => {
      console.log("useEffect")
    allQuotes();
  }, []);

  useEffect(()=>{handle()},[myQuotes])

  return (
    <div>
        {console.log("quotes Return")}
      <button onClick={handle}>Get Quotes</button>
      {myQuotes.length > 0 ? <QuoteCards quote={quote} /> : <p>Loading</p>}
    </div>
  );
};
