import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import WorkoutItem from './WorkoutItem';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';


//https://www.npmjs.com/package/react-calendar
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


import './StandardList.css';


const StandardList = () => {

  const [value, onChange] = useState(new Date());
  const [WorkoutsDetails, setWorkoutDetails] = useState({
    name: "",
    weight: "",
    sets: "",
  });
  const [list, updateList] = useState([]);
  const handleRemoveItem = (e) => {
    console.log(list)
    const name = e.target.getAttribute("name")
    updateList(list.filter(item => item.name !== name));
  };
  const addName = (e) => {
    let name = e.target.value;
    setWorkoutDetails({ ...WorkoutsDetails, name: name })
  };

  const addWeight = (e) => {
    let weight = e.target.value;
    setWorkoutDetails({ ...WorkoutsDetails, weight: weight })
  };

  const addSets = (e) => {
    let sets = e.target.value;
    setWorkoutDetails({ ...WorkoutsDetails, sets: sets })
  };

  return (
    <Container
      className='Main'
    >
      <Calendar
        className="calander"
        onChange={onChange} value={value} />
      <Grid
        container
        rowSpacing={-1}
        columnSpacing={{ xs: 3, sm: 3, md: 3 }}
        className="GridContainer"
      >
        <Grid
          className='GridItem'
          item
          xs={4}>
          <TextField
            className='WorkoutInput'
            id="filled-basic"
            label="Workout"
            value={WorkoutsDetails.name || ''}
            onChange={addName}
          />
        </Grid>

        <Grid
          className='GridItem'
          item xs={4}>
          <TextField
            className='WorkoutInput'
            id="filled-basic"
            label="Weight"
            value={WorkoutsDetails.weight || ''}
            onChange={addWeight}
          />
        </Grid>

        <Grid
          className='GridItem'
          item xs={4}
        >
          <TextField
            className='WorkoutInput'
            id="filled-basic"
            label="Sets"
            value={WorkoutsDetails.sets || ''}
            onChange={addSets} />
        </Grid>

        <Grid
          className='GridItem'
          item xs={12}
        >
          <Button
            className='SubmitButton'
            variant="contained" onClick={() => { updateList([...list, WorkoutsDetails]); setWorkoutDetails({}); }}>Submit</Button>
        </Grid>
      </Grid>


      <label className='Head'>Todays Workout</label>
      <Container
        className='ListContainer'>


        <List
          className='MainList'
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {list.map((value) => (
            <ListItem
              className='ListItem'
              key={("" + Math.random()).substr(2)}
              disableGutters
            >
              <WorkoutItem
                name={value.name}
                weight={value.weight}
                sets={value.sets}
              />
              <IconButton
               sx={{ "&:hover": { color: "red" } }}
              onClick={() => {handleRemoveItem();
                console.log("hello")}
              }
              ><DeleteIcon/></IconButton>
            </ListItem>
          ))}
        </List>

      </Container>

    </Container>
  )

}
export default StandardList;