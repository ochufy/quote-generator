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
import CircularProgress from '@mui/material/CircularProgress';

function Home() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState("");
  const [quoteID, setQuoteID] = useState("");

  const [tag, setTag] = useState("");

  const getQuote = () => {
    Axios.get("https://api.quotable.io/random")
    .then(
      (response) => {
        setQuote(response.data.content);
        setAuthor("- " + response.data.author);
        setQuoteID(response.data._id);
      }
    )
  }

  useEffect(() => {getQuote()},[])

  const options = Tags.map(tag => (tag.name));

  const getNewQuote = () => {
    if(tag != null){
    Axios.get(`https://api.quotable.io/random?tags=${tag}`)
    .then(
      (response) => {
        setQuote(response.data.content);
        setAuthor("- " + response.data.author);
        setQuoteID(response.data._id);
      }
    )
  }
  else {getQuote()}
  }

  let newQuote = {
    "key": quoteID,
    "id": quoteID,
    "content": quote,
    "author": author
  }

  const addQuote = () => {
    localStorage.setItem(`${newQuote.id}`, JSON.stringify(newQuote));
  }

  return (
    <>
    <Paper
      className="quotePaper"
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
        padding: "2% 2% 1% 2%",
      }}
    >
      {quote ?
        <Typography variant="body1" sx={{color: "white", width:"100%",pb:"7%", display:"flex", alignItems:"center",justifyContent: 'center',}}>{quote}</Typography>
        : <CircularProgress sx={{color: "white"}}/>
      }
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
      className="autoComplete"
      disablePortal
      options={options}
      sx={{mx: "auto", mb: "auto", borderRadius: 7, backgroundColor: "white", opacity: 0.8}}
      onChange={(event, newTag) => {setTag(newTag)}}
      renderInput={(params) => <TextField className="inputRounded" {...params} label="choose tag"/>}
    />
    <Button className="buttonRounded" sx={{mt: "3%", borderRadius: 3, textTransform: "capitalize"}} variant="contained" color="success" onClick={getNewQuote}>
      Next Quote
    </Button>
    </Box>
    </>
  )
}

export default Home;
