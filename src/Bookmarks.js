import QuoteBox from "./QuoteBox.js";
// import { useEffect } from "react";

function Bookmarks() {

  let li = [];
  for(let i=0; i<localStorage.length; i++) {
    let k = localStorage.key(i);
    li.push(JSON.parse(localStorage.getItem(k)));
  }

  return (
    <div>
    {li.map((q) => (<QuoteBox key={q.id} id={q.id} quote={q.content} author={q.author}/>))}
    </div>
  )
}

export default Bookmarks;
