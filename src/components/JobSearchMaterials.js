import React, {useContext, useEffect} from 'react';
import { TrackerContext } from '../App'

function JobSearchMaterials() {
    const sharedStates = useContext(TrackerContext);

    return (
        <div>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Resume</InputGroupText>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Cover Letter</InputGroupText>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Mission Statement</InputGroupText>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>LinkedIn URL</InputGroupText>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>GitHub URL</InputGroupText>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>repl.it URL</InputGroupText>
                </InputGroupAddon>
                <Input />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Codesandbos URL</InputGroupText>
                </InputGroupAddon>
                <Input />
            </InputGroup>
        </div>
    );
}

export default JobSearchMaterials;