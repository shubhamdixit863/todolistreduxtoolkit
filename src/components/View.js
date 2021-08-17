import React from 'react'
import {useSelector} from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";
import {removeItem} from "../slice/todolist";



function View() {


    const aditya=useSelector(state=>state.todolist);
    const dispatch=useDispatch();

    console.log(aditya);


    return (
        <div style={{marginTop:"120px",marginLeft:"350px",padding:"30px"}}>
            <h2>Tasks</h2>
           


            <List>


            {aditya.value.map(ele=>(
               <ListItem key={ele.id}>
               <ListItemAvatar>
                 <Avatar>
                   <WorkIcon />
                 </Avatar>
               </ListItemAvatar>
               <ListItemText primary={ele.title} secondary={ele.summary}  />
               <Button variant="contained" color="secondary" onClick={()=>dispatch(removeItem(ele.id))}  >
       Delete Item
      </Button>
             </ListItem>
            ))}
   
     
      
    </List>
           

            
        </div>
    )
}

export default View
