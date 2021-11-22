import { Switch } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';
import { AuthenticatedRoute } from './AuthenticatedRoute';
import { AuthenticatedRouteDefault } from './AuthenticatedRouteDefault';



export function Routes() {

    return (
        <Switch>
            <AuthenticatedRouteDefault path="/" exact component={SignIn} />
            <AuthenticatedRoute path="/home" component={Home} />
        </Switch>
    );
}