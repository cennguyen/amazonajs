import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    return (
        <div>
            <Route
                {...rest}s
                render={(props) =>
                    userInfo ? (
                        <Component {...props}></Component>
                    ) : (
                            <Redirect to="/signin" />
                        )
                }></Route>
        </div>
    )
}