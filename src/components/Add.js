import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";
import {addItem} from "../slice/todolist";




function Add() {



function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }
    const [state,setState]=useState({

        title:"",
        summary:"",
        
    })

    const dispatch=useDispatch();


const handleChange=(event)=>{
setState({...state,[event.target.name]:event.target.value});
    
}

const handleSubmit=()=>{

setState({...state,id:makeid(5)});

dispatch(addItem(state));

}
    return (
        <div style={{marginTop:"120px" ,padding:"30px"}}>
            <h2>Please Add A Task</h2>




    <form  noValidate autoComplete="off">
     
    <TextField
          id="standard-full-width"
          label="Please Enter  Title"
          style={{ margin: 8 }}
          placeholder="Title"

          onChange={handleChange}
          name="title"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />



     
<TextField
          id="standard-full-width"
          label="Please Enter  Summary"
          style={{ margin: 8,marginTop:60 }}
          placeholder="Summary"
          onChange={handleChange}
          name="summary"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />



<Button variant="contained" color="primary"   onClick={handleSubmit}>
       Add Item
      </Button>
    </form>
          
            
        </div>
    )
}

export default Add
