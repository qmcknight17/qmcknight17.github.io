import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Timmer from './TImmer';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { margin } from '@mui/system';
import {Route, useNavigate} from "react-router-dom";


const LandingPage = (props) => {

    const navigate = useNavigate();
    return (
        <Container
            className='MainContent'
        >
            <Card>
                <div >
                    <CardContent
                        sx={{
                            padding: '0px',

                        }} >
                        <div style={{ position: 'relative' }} >
                            <CardMedia
                                className='Image'
                                component="img"
                                image="https://images.squarespace-cdn.com/content/v1/5a89db634c0dbff0a1a42858/1525831652343-BAANU4I6CNG48IGJ2DNM/barbell-black-and-white-black-and-white-791763.jpg?format=2500w"
                            />
                            <div

                                onClick={() => navigate('/Active')}
                                style={{
                                    position: 'absolute',
                                    color: 'white',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    fontSize: '30px'
                                }} >Start Workout</div>
                        </div>
                    </CardContent>

                    <CardContent
                        sx={{
                            padding: '0px'
                        }} >
                        <div style={{ position: 'relative' }} >
                            <CardMedia
                                component="img"
                                className='Image'
                                image="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGd5bXxlbnwwfHwwfHw%3D&w=1000&q=80"
                            />
                            <div 
                            onClick={() => navigate('/Blog')}
                            style={{
                                position: 'absolute',
                                color: 'white',
                                top: '50%',
                                left: '50%',
                                fontSize: '30px',
                                transform: 'translateX(-50%)'
                            }} >Workout Blog</div>
                        </div>
                    </CardContent>

                    <CardContent
                        sx={{
                            padding: '0px'
                        }} >
                        <div style={{ position: 'relative' }} >
                            <CardMedia
                                component="img"
                                className='Image'
                                image="https://media.istockphoto.com/photos/black-and-white-photo-of-old-dumbbells-picture-id470740114?k=20&m=470740114&s=612x612&w=0&h=bSmQ_MPhs2Ga_Gnr88w9Jexoh5-nYFZ2Py0EosOCUkE="
                            />
                            <div

                                style={{
                                    position: 'absolute',
                                    color: 'white',
                                    top: '50%',
                                    left: '50%',
                                    fontSize: '30px',

                                    transform: 'translateX(-50%)'
                                }}>Articles</div>
                        </div>
                    </CardContent>
                </div>
            </Card>




        </Container>



    );
}

export default LandingPage;