import React, {useContext, useEffect} from 'react';
import { TrackerContext } from '../App'

function JobSearchMaterials() {
    const sharedStates = useContext(TrackerContext);




    return (
        <div >
            <h1>{sharedStates.loggedIn ? "Job Search Materials" : "Access Denied. Please login or create an account"}</h1>
        </div>
    );
}

export default JobSearchMaterials;