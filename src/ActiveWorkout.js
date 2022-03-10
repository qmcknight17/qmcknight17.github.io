import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Timmer from './TImmer';
import Button from '@mui/material/Button';
import './ActiveWorkout.css'
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './LandingPage.css';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ActiveWorkout = () => {
    const [duration, setduration] = useState(15);
    const [playing, setplaying] = useState(false)
    const incrementduration = () => setduration(duration + 15);
    const decrementduration = () => setduration(duration - 15);
    const startTimmer = () => setplaying(true);
    const stopTimmer = () => setplaying(false);
    const [key, setKey] = useState(0);
    return (

      
            <div className='Time'>
                <Card
                    className='MainContent'
                   >

                    <div className="Timmer">
                        <Timmer key={key} play={playing} duration={duration} /></div>
                    <CardContent>
                        <Typography sx={{
                            fontSize: "30px",
                            fontWeight: 'bold'

                        }} gutterBottom variant="h5" component="div">
                            Start Workout
                        </Typography>
                    </CardContent>
                    <CardActions
                    className='btnGroup'
                    >

                        <Button
                            className='Button'
                            size="large"
                            variant="contained"
                            onClick={decrementduration} >-</Button>
                        <Button variant="contained"
                            className='Button' size="large" onClick={incrementduration}>+</Button>
                    </CardActions>

                    <div className='buttons'>
                        <Stack direction="column" spacing={2}>
                            <Button variant="contained" size="large" onClick={startTimmer} >startWorkout</Button>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={(event) =>
                                    [setKey(prevKey => prevKey + 1),
                                    stopTimmer()]
                                }
                            >Reset
                            </Button>
                        </Stack>
                    </div>
                </Card>
            </div>
        
    );
}

export default ActiveWorkout;