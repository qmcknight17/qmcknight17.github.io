import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

const SignUp = () => {
    const [details, setDetails] = useState({ email: "", password: "" });


    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(details.email, details.password);
            navigate("/Login");
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">password:</label>
                    <input type="text" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" />

                <div>
                
                </div>
            </div>
        </form>
    );
}

export default SignUp;