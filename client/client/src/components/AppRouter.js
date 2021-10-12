import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const isAuth = true
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}
            {publicRoutes.map(({path, component}) =>
                <Route key={path} path={path} component={component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    )
}

export default AppRouter
