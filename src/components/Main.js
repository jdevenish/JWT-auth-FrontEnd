import React, { useEffect } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from "./Home"
import TargetCompanies from "./TargetCompanies"
import JobSearchMaterials from "./JobSearchMaterials"
import NetworkingContacts from "./NetworkingContacts"
import Resources from "./Resources";
import WithAuth from "../services/withAuth"
import { checkToken } from '../services/api-helper-userAuth'


function Main() {
    let valid = true;
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/target-companies-and-applications" component={WithAuth(TargetCompanies)} />
            <Route path="/job-search-materials" component={valid ? JobSearchMaterials : Home} />
            <Route path="/networking-contacts" component={WithAuth(NetworkingContacts)} />
            <Route path="/resources" component={Resources} />
            <Redirect to="/" />
        </Switch>
    );
}

export default Main;
