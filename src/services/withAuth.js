import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'




function WithAuth(ComponentToProtect, token) {
    console.log("checkToken status:")
    const [loading, setLoading] = useState(true)
    const [valid, setValid] = useState(false)

    console.log("checkToken status:")
    useEffect(() => {
        const verifyToken = async () => {
            const api = axios.create({
                baseURL: 'https://mighty-tundra-18136.herokuapp.com/api'
            });

            const resp = await api.get('/checkToken', {params:{token: token}});
            console.log("checkToken status = ", resp.status)
            if (resp.status === 200) {
                console.log("WithAuth: token valid")
                setLoading(false);
                setValid(true)
            }
        }
        verifyToken()
    }, [])


    if (!valid) {
        console.log("checkToken status = redirecting to home")
        return <Redirect to="/" />;
    }
    console.log("checkToken status = returning component")
    return( <ComponentToProtect {...this.props} />);

}

export default WithAuth