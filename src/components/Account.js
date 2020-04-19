import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { checkToken, registerNewUser, authenticateUser, logUserOut } from '../services/api-helper-userAuth'

import { TrackerContext } from '../App'

function Account() {
    const [userCreds, setUserCreds] = useState({
        email: "",
        password: ""
    });
    const sharedStates = useContext(TrackerContext);

    const handleUserNameChange = e => {
        let newCreds = {...userCreds};
        newCreds.email = e.target.value;
        setUserCreds(newCreds);
    };

    const handlePasswordChange = e => {
        let newCreds = {...userCreds};
        newCreds.password = e.target.value;
        setUserCreds(newCreds);
    };

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        const json = await registerNewUser(userCreds);
        if(json.status === 200){
            console.log("User successfully created")
        } else{
            console.log("Error creating account: ", json.error)
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const json = await authenticateUser(userCreds);
        if(json.status === 200){
            localStorage.setItem("token", json.token);
            sharedStates.setLoggedIn(true);
            sharedStates.setToken(json.token)
            console.log("User Authenticated");
        } else{
            sharedStates.setLoggedIn(false);
            console.log("Error Authenticating User: ", json.error);
        }
    };

    return (
        <>
            <Form inline onSubmit={handleCreateAccount}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="something@idk.cool"
                        onChange={handleUserNameChange}/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="don't tell!"
                        onChange={handlePasswordChange}/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
            <br/>
            <br/>
            <Form inline onSubmit={handleLogin}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="something@idk.cool"
                        onChange={handleUserNameChange}/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="don't tell!"
                        onChange={handlePasswordChange}/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </>
    );
}

export default Account;
