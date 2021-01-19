import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
   Button:{
    background:'red',
    color:'white',
    padding:'10px',
    marginTop:'50px',
    width:'100px',
    fontSize:'15px',
    fontWeight:'bolder',
    border:'none',
    borderRadius:'5px', 
    marginLeft:'100px',
    textTransform:'lowercase',
    '&:hover':{
        background:'red'
    }
   }
  });
  
  export  {useStyles};