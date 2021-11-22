import React, { useState } from 'react';
import { Route, Redirect} from 'react-router-dom';

export const AuthenticatedRoute = ({component: Component, ...rest }) => {
    const [isAuthenticated] = useState(() => {
        const token = localStorage.getItem('@TokenLibrary');
        console.log(token);
        if (token) {
            console.log('aqui');
            return true
        }
        console.log('2');
        return false;
    });

    return(
        <Route {...rest} render={props => (isAuthenticated ? (
            <Component {...props} />
            ) : (
                <Redirect to="/" />
            ))}
        />
    );
}