import React, {useContext} from 'react';
import { TrackerContext } from '../App'

function NetworkingContacts() {
    const sharedStates = useContext(TrackerContext);

    return (
        <div >
            <h1>{sharedStates.loggedIn ? "Networking Contacts" : "Access Denied. Please login or create an account"}</h1>
        </div>
    );
}

export default NetworkingContacts;