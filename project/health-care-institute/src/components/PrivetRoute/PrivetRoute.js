import userEvent from '@testing-library/user-event';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/AuthProvider';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        console.log(isLoading);
        return <Spinner animation="border" variant="primary" />;
    }
    else {
        console.log(isLoading);
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                >

                </Redirect>}
        >

        </Route>
    );
};

export default PrivetRoute;