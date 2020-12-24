/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import routes from './routeConfig';
import NotFound from '../pages/404/NotFound'



class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    {routes.map((r, i) => <Route path={r.path} component={r.component} key={i} exact />)}
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(Router);
