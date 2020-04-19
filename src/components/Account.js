import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { checkToken, registerNewUser, authenticateUser, logUserOut } from '../services/api-helper-userAuth'

import { TrackerContext } from '../App'

function Account() {
    const [userNameInput, setUserNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("")
    const sharedStates = useContext(TrackerContext);

    const handleUserNameChange = e => {
        const userInput = e.target.value
        setUserNameInput(userInput)
        console.log(userNameInput)
    }

    const handlePasswordChange = e => {
        const userInput = e.target.value
        setPasswordInput(userInput)
        console.log(passwordInput)
    }

    const handleCreateAccount = async (e) => {
        e.preventDefault()
        const user = {
            "email": userNameInput,
            "password": passwordInput
        }
        const json = await registerNewUser(user);
        console.log("register new user = ", json)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const user = {
            "email": userNameInput,
            "password": passwordInput
        }
        const json = await authenticateUser(user);
        if(json.status === 200){
            sharedStates.setLoggedIn(true)
            sharedStates.setToken(json.token)
        } else{
            sharedStates.setLoggedIn(false)
        }
        console.log("Authenticating new user = ", json)
    }

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
