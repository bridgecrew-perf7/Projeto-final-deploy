import React from 'react'
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import DeliveryAddVeiculo from '../pages/DeliverymanAddVehicle/DeliveryAddVeiculo'
import Forgot from '../pages/ForgotPassword/Forgot'
import UserLogged from '../pages/UserLogged/UserLogged'
import EditInfo1 from '../pages/EditInfo1/EditInfo1'
import Deliveryman from '../pages/Deliveryman/Deliveryman'
import EditInfo1 from '../pages/EditInfo1/EditInfo1'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
function routes() {
    return (
        <Router>
            <Switch>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/register">
                    <Register/>
                </Route>

                <Route exact path="/login">
                    <Login/>
                </Route>
                
                <Route exact path="/forgot-password">
                    <Forgot/>
                </Route>
                
                <Route exact path="/delivery-add-cnh">
                    <DeliveryAddVeiculo/>
                </Route>

                <Route exact path="/user-page">
                    <UserLogged/>
                </Route>

                <Route exact path="/deliveryman">
                    <Deliveryman/>
                </Route>

                <Route exact path="/edit-info-1">
                    <EditInfo1/>
                </Route>

                <Route exact path="/404">
                        <NotFound/>
                </Route>

                <Route>
                        <Redirect to="/404"/>
                </Route>

            </Switch>
        </Router>
    )
}

export default routes
