import idlist from "./QuoteIDs.js";
import { useState, useEffect } from "react"
import Axios from "axios"
import QuoteBox from "./QuoteBox.js";

function Bookmarks() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const [quoteBoxes, setQuoteBoxes] = useState([]);

  function newQuoteBox(id) {
    Axios.get(`https://api.quotable.io/quotes/${id}`)
    .then(
      (response) => {
        console.log(response.data.content);
        console.log(response.data.author);
        setQuote(response.data.content);
        setAuthor("- " + response.data.author);
        setQuoteBoxes(quoteBoxes.concat(<QuoteBox quote={quote} author={author}/>))
      }
    )
  }

  if(idlist != null){
  idlist.forEach(newQuoteBox)}

  useEffect(() => {newQuoteBox()}, [])

  return (
    <>
      {quoteBoxes}
    </>
  )
}

export default Bookmarks;
