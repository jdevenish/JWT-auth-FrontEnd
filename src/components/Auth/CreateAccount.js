import React, { useState, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { registerNewUser } from '../../services/api-helper-userAuth'
import { TrackerContext } from '../../App'
import "./Account.css";


function Account() {
    const sharedStates = useContext(TrackerContext);

    const handleUserNameChange = e => {
        let newCreds = {...sharedStates.userCreds};
        newCreds.email = e.target.value;
        sharedStates.setUserCreds(newCreds);
    };

    const handlePasswordChange = e => {
        let newCreds = {...sharedStates.userCreds};
        newCreds.password = e.target.value;
        sharedStates.setUserCreds(newCreds);
    };

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        if(sharedStates.userCreds.email.length > 3){
            const json = await registerNewUser(sharedStates.userCreds);
            if(json.status === 200){
                localStorage.setItem("token", json.token);
                sharedStates.setToken(json.token)
                console.log("User successfully created")
            } else{
                sharedStates.setLoggedIn(false);
                console.log("Error creating account: ", json.error)
            }
        }
    };

    return (
        <div className="loginContainer">
            <Form onSubmit={handleCreateAccount}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input
                        type="email"
                        name="email"
                        placeholder="Username or Email Address"
                        onChange={handleUserNameChange}
                        className="loginContainer-input"/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input
                        type="password"
                        name="password"
                        // id="examplePassword"
                        placeholder="Password (case sensitive)"
                        onChange={handlePasswordChange}
                        className="loginContainer-input"/>
                </FormGroup>
                <Button className="loginContainer-Button">Sign Up</Button>
                <p>Dont' forget your password!</p>
                <p>Job Tracker does not have access
                    to your password and cannot provide access to your account
                    if you forget it.</p>
            </Form>
        </div>
    );
}

export default Account;