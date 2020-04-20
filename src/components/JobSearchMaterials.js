import React, {useContext, useEffect} from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import { TrackerContext } from '../App'

function JobSearchMaterials() {
    const sharedStates = useContext(TrackerContext);

    return (
        <div className="jsmContainer">
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Resume</InputGroupText>
                </InputGroupAddon>
                <Input placeholder={sharedStates.userProfile.resume}/>
            </InputGroup>
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