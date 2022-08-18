import {Route, Routes} from "react-router-dom";
import Home from "./Home.js";
import Bookmarks from "./Bookmarks.js";
import MenuButtons from "./MenuButtons.js";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme1 = createTheme(
    {
      typography: {
        fontFamily: "Poppins",
        fontSize: 16,
      }
    }
  );



  return (
    <ThemeProvider theme={theme1}>
    <MenuButtons />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="bookmarks" element={<Bookmarks />} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
