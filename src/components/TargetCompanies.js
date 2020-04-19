import React, {useContext} from 'react';
import { TrackerContext } from '../App'

function TargetCompanies() {
    const sharedStates = useContext(TrackerContext);
    return (
        <div >
            <h1>{sharedStates.loggedIn ? "Target Companies" : "Access Denied. Please login or create an account"}</h1>
        </div>
    );
}

export default TargetCompanies;
