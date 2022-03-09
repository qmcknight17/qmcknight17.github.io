import React, {useState , useEffect} from 'react';
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


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Goals = () => {

    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
  
    const [users, setUsers] = useState([]);
    const [curret, setCurrent] = useState([]);
    const [Goals, setGoals] = useState([]);

    const usersCollectionRef = collection(db, "Users");
    const usersGoalsCollectionRef = collection(db, "Users/User1/Goals");
    const usersTargetCollectionRef = collection(db, "Users/User1/Current");


    const updateUser = async (id, age) => {
        const userDoc = doc(db, "users", id);
        const newFields = { age: age + 1 };
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

    console.log(Goals)
    console.log(curret)



    const percentage = 66;


    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item>

                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>

                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>

                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>

                    <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                    </Item>
                </Grid>
            </Grid>
        </Box>);
}

export default Goals;