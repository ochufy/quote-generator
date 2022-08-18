import Axios from "axios"
import { useState, useEffect } from "react"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Tags from "./tags.json";
import Button from '@mui/material/Button';


function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const [tag, setTag] = useState("");

  const getQuote = () => {
    Axios.get(`https://api.quotable.io/random`)
    .then(
      (response) => {
        console.log(response.data);
        setQuote(response.data.content);
        setAuthor("- " + response.data.author);
      }
    )
  }

  useEffect(() => {getQuote()}, [])

  const options = Tags.map(tag => (tag.name));

  const getNewQuote = () => {
    // window.location.reload(false);
    if(tag != null){
    Axios.get(`https://api.quotable.io/random?tags=${tag}`)
    .then(
      (response) => {
        console.log("tag = " + response.data.tags);
        setQuote(response.data.content);
        setAuthor("- " + response.data.author);
      }
    )
  }
  else {getQuote()}
  }

  return (
    <>
    <Paper
      elevation={4}
      sx={{
        margin: "auto",
        mt: "3%",
        display: "flex",
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: '#D05252',
        borderRadius: "1",
        width: "50%",
        padding: "2% 2% 1% 2%"
      }}
    >
      <Typography variant="body1" sx={{width:"100%",pb:"7%", display:"flex", alignItems:"center",justifyContent: 'center',}}>{quote}</Typography>
      <Typography variant="body2">{author}</Typography>

    </Paper>
    <Box
    sx={{
      margin: "auto",
      display: "flex",
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      alignItems: 'center',
      flexDirection: "column",
    }}>
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: 200, margin: "auto", mt: "3%" }}
      onChange={(event, newTag) => {setTag(newTag); console.log(newTag,tag);}}
      renderInput={(params) => <TextField {...params} label="choose tag" />}
    />
    <Button sx={{mt: "3%"}} variant="contained" color="success" onClick={getNewQuote}>
      Next Quote
    </Button>
    </Box>
    </>
  )
}

export default Home;
