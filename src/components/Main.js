import React, {useContext, useEffect} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { TrackerContext } from '../App'
import Home from "./Home"
import TargetCompanies from "./TargetCompanies"
import JobSearchMaterials from "./JobSearchMaterials"
import NetworkingContacts from "./NetworkingContacts"
import Resources from "./Resources";
import AccessDenied from "./Auth/AccessDenied";


function Main() {
    const sharedStates = useContext(TrackerContext);

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/target-companies-and-applications" component={sharedStates.loggedIn ? TargetCompanies : AccessDenied} />
            <Route path="/job-search-materials" component={sharedStates.loggedIn ? JobSearchMaterials : AccessDenied} />
            <Route path="/networking-contacts" component={sharedStates.loggedIn ? NetworkingContacts : AccessDenied} />
            <Route path="/resources" component={Resources} />
            <Redirect to="/" />
        </Switch>
    );
}

export default Main;
