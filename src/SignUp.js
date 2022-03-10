import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useUserAuth } from "./UserAuthContext";
import { db } from "./firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import "./Login.css"

const SignUp = () => {
    const [details, setDetails] = useState({name: "", email: "", password: "" });


    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const usersCollectionRef = collection(db, "Users");
    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: details.name, email: details.email });
    };



    const submitHandler = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(details.email, details.password);
            createUser();
            console.log(details)
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Sign Up</h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}

                <div className="form-group">
                    <TextField
                        className='LoginInput'
                        id="filled-basic"
                        label="Name"
                        onChange={e => setDetails({ ...details, name: e.target.value })}
                        value={details.name}
                    />
                </div>

                <div className="form-group">
                    <TextField
                        className='LoginInput'
                        id="filled-basic"
                        label="Email"
                        onChange={e => setDetails({ ...details, email: e.target.value })}
                        value={details.email}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        className='LoginInput'
                        id="filled-basic"
                        label="Password"
                        onChange={e => setDetails({ ...details, password: e.target.value })}
                        value={details.password}
                        type="password"
                    />
                </div>
                <Button
                    className='SubmitButton'
                    variant="contained"
                    type="submit"
                    >Login</Button>
                <div className="Link">
                    <Link to={"/"}>Already Have an Account?</Link>
                </div>
            </div>
        </form>
    );
}

export default SignUp;