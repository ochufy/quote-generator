import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from "react";

function MenuButtons() {
  const navigate = useNavigate();

  const [button1Variant, set1Variant] = useState("outlined");
  const [button2Variant, set2Variant] = useState("text");

  const handleclick1 = () => {
    navigate("/");
    set1Variant("outlined");
    set2Variant("text");
  }

  const handleclick2 = () => {
    navigate("bookmarks");
    set1Variant("text");
    set2Variant("outlined");
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
    <Button sx={{color:"white", borderColor: "white"}} size="small" variant={button1Variant} onClick={handleclick1}>
      Home
    </Button>
    <Button sx={{color:"white", borderColor: "white"}} size="small" variant={button2Variant} onClick={handleclick2}>
      Bookmarks
    </Button>
    </Box>
  )
}

export default MenuButtons;
