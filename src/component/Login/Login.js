import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { GoogleSinInUser } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const handelGoogleSinIn = () => {
        GoogleSinInUser(location, history)
    }

    return (
        <div className="text-center my-28">
            <button onClick={handelGoogleSinIn} className="px-4 py-3  hover:bg-yellow-400 rounded-lg text-white bg-red-400 my-4">Google SinUp</button>
        </div>
    );
};

export default Login;