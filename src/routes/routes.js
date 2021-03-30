import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomePage, LoginPage, ProfilePage, ForecastPage } from '../pages';

export const useRoutes = () => {
    const generateRoutes = (isLogged, user) => {
        if (isLogged) {
            return (
                <Switch>
                    <Route path='/home' exact>
                        <HomePage />
                    </Route>
                    <Route path='/profile' exact>
                        <ProfilePage user={user}/>
                    </Route>
                    <Route path='/forecast' exact>
                        <ForecastPage />
                    </Route>
                    <Redirect to='/home'/>
                </Switch>
            )
        }
        return (
            <Switch>
                <Route path='/login' exact>
                    <LoginPage user={user}/>
                </Route>
                <Redirect to='/login'/>
            </Switch>
        )
    }
    return { generateRoutes }
}