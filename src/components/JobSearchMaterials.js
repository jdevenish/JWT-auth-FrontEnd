import React, {useContext, useEffect} from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input, Form, FormGroup } from 'reactstrap';
import { TrackerContext } from '../App'

function JobSearchMaterials() {
    const sharedStates = useContext(TrackerContext);
    let resumeURL = "";

    const handleResumeChange = e => {
        resumeURL = e.target.value;
        // let newUserProfile = {...sharedStates.userProfile};
        // newUserProfile.jobSearchMaterials.resume = e.target.value;
        // setUserCreds(newCreds);
        console.log("resume value  ", resumeURL)
    };

    const handleResumeSubmit = e => {
        // e.preventDefault();
        console.log("Saving :", resumeURL)
    };

    // const handleBrandStatementChange = e => {
    //     let newCreds = {...userCreds};
    //     newCreds.email = e.target.value;
    //     setUserCreds(newCreds);
    // };
    //
    // const handleCodeSandBoxChange = e => {
    //     let newCreds = {...userCreds};
    //     newCreds.email = e.target.value;
    //     setUserCreds(newCreds);
    // };
    //
    // const handleCoverLetterChange = e => {
    //     let newCreds = {...userCreds};
    //     newCreds.email = e.target.value;
    //     setUserCreds(newCreds);
    // };
    //
    // const handleGitHubChange = e => {
    //     let newCreds = {...userCreds};
    //     newCreds.email = e.target.value;
    //     setUserCreds(newCreds);
    // };
    //
    // const handleLinkedInChange = e => {
    //     let newCreds = {...userCreds};
    //     newCreds.email = e.target.value;
    //     setUserCreds(newCreds);
    // };
    //
    // const handlePortfolioSiteChange = e => {
    //     let newCreds = {...userCreds};
    //     newCreds.email = e.target.value;
    //     setUserCreds(newCreds);
    // };
    //
    // const handleReplChange = e => {
    //     let newCreds = {...userCreds};
    //     newCreds.email = e.target.value;
    //     setUserCreds(newCreds);
    // };

    return (
        <div className="jsmContainer">
            <Form onSubmit={handleResumeSubmit}>
                <FormGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Resume</InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder={sharedStates.userProfile.resume} onChange={handleResumeChange}/>
                </FormGroup>
            </Form>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Cover Letter</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={sharedStates.userProfile.coverLetter}/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Mission Statement</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={sharedStates.userProfile.brandStatement}/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>LinkedIn URL</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={sharedStates.userProfile.linkedIn}/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>GitHub URL</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={sharedStates.userProfile.gitHub}/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>repl.it URL</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={sharedStates.userProfile.repl}/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>CodeSandbox URL</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={sharedStates.userProfile.codeSandBox}/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Portfolio URL</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={sharedStates.userProfile.profileSite}/>
            </InputGroup>
        </div>
    );
}

export default JobSearchMaterials;