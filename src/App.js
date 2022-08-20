import {Route, Routes} from "react-router-dom";
import Home from "./Home.js";
import Bookmarks from "./Bookmarks.js";
import MenuButtons from "./MenuButtons.js";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  // const theme1 = createTheme(
  //   {
  //     typography: {
  //       fontFamily: "Poppins",
  //       fontSize: 16,
  //     }
  //   }
  // );

  const theme1 = createTheme();
  theme1.typography.body1 = {
    fontFamily: "Poppins",
    '@media only screen and (max-width: 600px)': {
      fontSize: "0.95rem" },
    '@media only screen and (min-width: 1200px)': {
      fontSize: "1.2rem"
    }

  }
  theme1.typography.body2 = {
    fontFamily: "Poppins",
    '@media only screen and (max-width: 600px)': {
    fontSize: "0.8rem" },
    '@media only screen and (min-width: 1200px)': {
      fontSize: "1rem"
    }
  }

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
