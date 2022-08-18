import Axios from "axios"
import { useState, useEffect } from "react"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Tags from "./tags.json";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import favQuotes from "./FavQuotes.js";
// import CircularProgress from '@mui/material/CircularProgress'; //loading indicator

function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [quoteID, setQuoteID] = useState("");

  const [tag, setTag] = useState("");

  const getQuote = () => {
    Axios.get("https://api.quotable.io/random")
    .then(
      (response) => {
        // console.log(response.data);
        setQuote(response.data.content);
        setAuthor("- " + response.data.author);
        setQuoteID(response.data._id);
        // console.log(quoteID);
      }
    )
  }

  useEffect(() => {getQuote()},[])

  const options = Tags.map(tag => (tag.name));

  const getNewQuote = () => {
    // window.location.reload(false);
    if(tag != null){
    Axios.get(`https://api.quotable.io/random?tags=${tag}`)
    .then(
      (response) => {
        // console.log("tag = " + response.data.tags);
        setQuote(response.data.content);
        setAuthor("- " + response.data.author);
        setQuoteID(response.data._id);
        // console.log(quoteID);
      }
    )
  }
  else {getQuote()}
  }

  let newQuote = {
    "key": quoteID,
    "content": quote,
    "author": author
  }

  const addQuote = () => {
    favQuotes.push(newQuote);
    console.log(favQuotes);
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
        borderRadius: "20px",
        width: "50%",
        padding: "2% 2% 1% 2%"
      }}
    >
      <Typography variant="body1" sx={{color: "white", width:"100%",pb:"7%", display:"flex", alignItems:"center",justifyContent: 'center',}}>{quote}</Typography>
      <Box sx={{width: "100%"}}>
        <Grid container spacing={2}>
          <Grid item xs={10} sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <Typography sx={{ml: "15%",color: "white", fontWeight: "600"}} variant="body2">{author}</Typography>
          </Grid>
          <Grid item xs={2} sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <IconButton onClick={addQuote}><BookmarkIcon sx={{color: "white"}} fontSize="small"/></IconButton>
          </Grid>
        </Grid>
      </Box>
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
      sx={{ width: 200, margin: "auto", mt: "3%", borderRadius: 7, backgroundColor: "white", opacity: 0.8}}
      onChange={(event, newTag) => {setTag(newTag)}}
      renderInput={(params) => <TextField className="inputRounded" {...params} label="choose tag"/>}
    />
    <Button sx={{mt: "3%"}} variant="contained" color="success" onClick={getNewQuote}>
      Next Quote
    </Button>
    </Box>
    </>
  )
}

export default Home;
