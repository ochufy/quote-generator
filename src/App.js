import {Route, Routes} from "react-router-dom";
import Home from "./Home.js";
import Bookmarks from "./Bookmarks.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="bookmarks" element={<Bookmarks />} />
    </Routes>
  );
}

export default App;
