import favQuotes from "./FavQuotes.js";
import QuoteBox from "./QuoteBox.js";

function Bookmarks() {

  favQuotes.forEach((q)=>{console.log(q.content, q.author);})

  return (
    <div>
    {favQuotes.map((q) => (<QuoteBox quote={q.content} author={q.author}/>))}
    </div>
  )
}

export default Bookmarks;
