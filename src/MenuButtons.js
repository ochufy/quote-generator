import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from "react";

function MenuButtons() {
  const navigate = useNavigate();

  let s1 = "";
  let s2 = "";
  if(window.location.pathname === "/") {
    s1 = "600";
    s2 = "300";
  }

  if(window.location.pathname === "/bookmarks") {
    s1 = "300";
    s2 = "600";
  }

  const [size1, setSize1] = useState(s1);
  const [size2, setSize2] = useState(s2);

  const handleclick1 = () => {
    navigate("/");
    if(window.location.pathname === "/") {
      setSize1("600");
      setSize2("300");
    }
  }

  const handleclick2 = () => {
    navigate("bookmarks");
    if(window.location.pathname === "/bookmarks") {
      setSize1("300");
      setSize2("600");
    }
  }

  return(
    <Box
      sx={{
        ml: "3%",
        mr: "3%",
        display: "flex",
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}
    >
    <Button sx={{color:"white", borderColor: "white", fontWeight:size1}} size="small" variant="text" onClick={handleclick1}>
      Home
    </Button>
    <Button sx={{color:"white", borderColor: "white", fontWeight:size2}} size="small" variant="text" onClick={handleclick2}>
      Bookmarks
    </Button>
    </Box>
  )
}

export default MenuButtons;
