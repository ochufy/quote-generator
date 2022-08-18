import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";
function QuoteBox(props) {

  useEffect(()=>{},[])
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
      <Typography sx={{ml: "3%",color: "white", fontWeight: "600"}} variant="body2">{props.author}</Typography>
    </Paper>
    </>
  )
}

export default QuoteBox;
