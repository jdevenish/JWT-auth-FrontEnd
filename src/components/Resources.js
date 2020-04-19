import React, {useContext} from 'react';
import { TrackerContext } from '../App'

function Resources() {
    const sharedStates = useContext(TrackerContext);
    return (
        <div>
            <h1>{sharedStates.loggedIn ? "Resources" : "Access Denied. Please login or create an account"}</h1>
        </div>
    );
}

export default Resources;