import React, {useContext} from 'react';
import Account from "./Auth/Account";
import { TrackerContext } from '../App'

function Home() {
    const sharedStates = useContext(TrackerContext);

    return (
        <div >
            <h1>Home</h1>
            <Account />
        </div>
    );
}

export default Home;