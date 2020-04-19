import React, {useContext, useEffect} from 'react';
import { checkToken } from '../services/api-helper-userAuth'
import { TrackerContext } from '../App'

function JobSearchMaterials() {
    const sharedStates = useContext(TrackerContext);

    useEffect(() => {
        const makeSectorApiCall = async () => {
            const json = await checkToken(sharedStates.token);
            console.log("JobSearchMaterials: checkToken results = ", json)
        };
        makeSectorApiCall()

    }, []);


    return (
        <div >
            <h1>JobSearchMaterials</h1>
        </div>
    );
}

export default JobSearchMaterials;