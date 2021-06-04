import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = (props) => {
	const { userId } = useSelector(state => state.user);
	if (userId)
		return <Route {...props} />
	else
		return <Redirect to="/login" />

}

export default ProtectedRoute;