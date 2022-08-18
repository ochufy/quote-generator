import Axios from "axios"
import { useState, useEffect } from "react"
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Tags from "./tags.json";

function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    Axios.get("https://api.quotable.io/random")
    .then(
      (response) => {
        console.log(response.data.content);
        console.log("-",response.data.author);
        setQuote(response.data.content);
        setAuthor("- " + response.data.author);
      }
    )
  }

  useEffect(() => {getQuote()}, [])

  const options = Tags.map(tag => (tag.name));
  
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
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: 200, margin: "auto", mt: "3%" }}
      renderInput={(params) => <TextField {...params} label="choose tag" />}
    />
    </>
  )
}

export default Home;
