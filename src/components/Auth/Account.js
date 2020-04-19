import React, { useContext } from 'react';
import { TrackerContext } from '../../App'
import CreateAccount from "./CreateAccount"
import LogIn from "./LogIn"

function Account() {
    const sharedStates = useContext(TrackerContext);

    return (
        <>
            {sharedStates.createModal ? <CreateAccount /> : <LogIn />}
        </>
    );
}

export default Account;
