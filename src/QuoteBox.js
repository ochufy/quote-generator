import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function QuoteBox(props) {

  const removeQuote = () => {
    localStorage.removeItem(props.id);
    window.location.reload(false);
  }

  return(
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

      <Typography variant="body1" sx={{color: "white", width:"100%",pb:"7%", display:"flex", alignItems:"center",justifyContent: 'center',}}>{props.quote}</Typography>
      <Box sx={{width: "100%"}}>
        <Grid container spacing={2}>
          <Grid item xs={10} sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <Typography sx={{ml: "15%",color: "white", fontWeight: "600"}} variant="body2">{props.author}</Typography>
          </Grid>
          <Grid item xs={2} sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <IconButton onClick={removeQuote}><RemoveCircleOutlineIcon sx={{color: "white"}} fontSize="small"/></IconButton>
          </Grid>
        </Grid>
      </Box>
    </Paper>
    </>
  )
}

export default QuoteBox;
