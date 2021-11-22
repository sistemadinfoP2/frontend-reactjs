import React, { useState } from 'react';
import { Route, Redirect} from 'react-router-dom';

export const AuthenticatedRouteDefault = ({component: Component, ...rest }) => {
    const [isAuthenticated] = useState(() => {
        const token = localStorage.getItem('@TokenLibrary');
        console.log(token);
        if (token) {
            return true
        }

        return false;
    });

    return(
        <Route {...rest} render={props => (isAuthenticated ? (
                <Redirect to="/home" />
            ) : (
                <Component {...props} />
            ))}
        />
    );
}