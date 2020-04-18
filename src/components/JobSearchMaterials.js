import React, { useEffect } from 'react';
import { checkToken } from '../services/api-helper-userAuth'


function JobSearchMaterials() {

    useEffect(() => {
        const makeSectorApiCall = async () => {
            const json = await checkToken();
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