import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useUserAuth } from "./UserAuthContext";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Goals.css"
import { db } from "./firebase";

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Goals = () => {

    const { user } = useUserAuth();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [users, setUsers] = useState([]);
    const [curret, setCurrent] =  useState({BodyWeight: "", Bench: "", Squat: "" , DeadLift: ""});
    const [Goals, setGoals] =  useState({BodyWeight: "", Bench: "", Squat: "" , DeadLift: ""});

    const usersCollectionRef = collection(db, "Users");
    const usersGoalsCollectionRef = collection(db, "Users/User1/Goals");
    const usersTargetCollectionRef = collection(db, "Users/User1/Current");

    const updateGoals = async () => {
        const userDoc = doc(db, "Users/User1/Goals/Goals1");
        console.log(userDoc)
        const newFields = {BodyWeight: Goals.BodyWeight, Bench: Goals.Bench, Squat: Goals.Squat, DeadLift: Goals.DeadLift};
        await updateDoc(userDoc, newFields);
    };

    const updateCurrent = async () => {
        const userDoc = doc(db, "Users/User1/Current/Current1");
        console.log(userDoc)
        console.log(curret)
        console.log(Goals)
        const newFields = {BodyWeight: curret.BodyWeight, Bench: curret.Bench, Squat: curret.Squat, DeadLift: curret.DeadLift};
        await updateDoc(userDoc, newFields);
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    };




    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            const data2 = await getDocs(usersGoalsCollectionRef);
            const data3 = await getDocs(usersTargetCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            data2.forEach((doc) => {
                setGoals(doc.data());
            });
            data3.forEach((doc) => {
                setCurrent(doc.data());
            });
        };

        getUsers();
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
      
        updateCurrent();
        updateGoals();
        
    };


    let displayWeight = Math.round(100 * Goals.BodyWeight / curret.BodyWeight)
    let displayBench = Math.round(100 * curret.Bench / Goals.Bench)
    let displaySquat = Math.round(100 * curret.Squat / Goals.Squat)
    let displayDeadLift = Math.round(100 * curret.DeadLift / Goals.DeadLift)


    return (
        <Box
            className='GoalContent'
        >
            <h1>Welcome Back {(users[1] ?? { name: '' }).name}</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item>
                        <h2>Body Weight</h2>
                        <CircularProgressbar value={displayWeight} text={`${displayWeight}%`} />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <h2>Bench</h2>
                        <CircularProgressbar value={displayBench} text={`${displayBench}%`} />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <h2>Squat</h2>
                        <CircularProgressbar value={displaySquat} text={`${displaySquat}%`} />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <h2>Deadlift</h2>
                        <CircularProgressbar value={displayDeadLift} text={`${displayDeadLift}%`} />
                    </Item>
                </Grid>
            </Grid>

            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={submitHandler}>
                <Box sx={style}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item>
                                <TextField
                                    className=''
                                    id="filled-basic"
                                    label="Current Body Weight"
                                    onChange={e => setCurrent({ ...curret, BodyWeight: e.target.value })}
                                    value={curret.BodyWeight}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                            <TextField
                                    className=''
                                    id="filled-basic"
                                    label="Goal Body Weight"
                                    onChange={e => setGoals({ ...Goals, BodyWeight: e.target.value })}
                                    value={Goals.BodyWeight}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <TextField
                                    className=''
                                    id="filled-basic"
                                    label="Current Bench"
                                    onChange={e => setCurrent({ ...curret, Bench: e.target.value })}
                                    value={curret.Bench}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                            <TextField
                                    className=''
                                    id="filled-basic"
                                    label="Goal Bench"
                                    onChange={e => setGoals({ ...Goals, Bench: e.target.value })}
                                    value={Goals.Bench}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <TextField
                                    className=''
                                    id="filled-basic"
                                    label="Current Squat"
                                    onChange={e => setCurrent({ ...curret, Squat: e.target.value })}
                                    value={curret.Squat}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                            <TextField
                                    className=''
                                    id="filled-basic"
                                    label="Goal Squat"
                                    onChange={e => setGoals({ ...Goals, Squat: e.target.value })}
                                    value={Goals.Squat}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <TextField
                                    className=''
                                    id="filled-basic"
                                    label="Current DeadLift"
                                    onChange={e => setCurrent({ ...curret, DeadLift: e.target.value })}
                                    value={curret.DeadLift}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                            <TextField
                                    className=''
                                    id="filled-basic"
                                    label="Goal DeadLift"
                                    onChange={e => setGoals({ ...Goals, DeadLift: e.target.value })}
                                    value={Goals.DeadLift}
                                />
                            


                            </Item>
                        </Grid>
                        <Button type='submit'>Submit</Button>
                    </Grid>
                </Box>
                </form>
            </Modal>
        </Box>


    );
}

export default Goals;