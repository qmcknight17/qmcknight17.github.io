import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);

    const [users, setUsers] = useState([]);
    const [curret, setCurrent] = useState([]);
    const [Goals, setGoals] = useState([]);

    const usersCollectionRef = collection(db, "Users");
    const usersGoalsCollectionRef = collection(db, "Users/User1/Goals");
    const usersTargetCollectionRef = collection(db, "Users/User1/Current");

    const updateCurrent = async (Bench) => {
        const userDoc = doc(db, "Users/User1/Goals/Goals1");
        console.log(userDoc)
        const newFields = { Bench: 235 + 1 };
        await updateDoc(userDoc, newFields);
    };

    const updateGoals = async (Bench) => {
        const userDoc = doc(db, "Users/User1/Current/Current1");
        console.log(userDoc)
        const newFields = { Bench: 235 + 1 };
        await updateDoc(userDoc, newFields);
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    };


    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
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




    let displayWeight = Math.round(100 * Goals.BodyWeight / curret.BodyWeight)
    let displayBench = Math.round(100 * curret.Bench / Goals.Bench)
    let displaySquat = Math.round(100 * curret.Squat / Goals.Squat)
    let displayDeadLift = Math.round(100 * curret.DeadLift / Goals.Deadlift)

  
    return (
        <Box sx={{ width: '100%' }}>
            <h1>Welcome Back {(users[0]?? {Name : ''}).Name}</h1>
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
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Box>


    );
}

export default Goals;