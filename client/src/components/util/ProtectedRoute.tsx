import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ profileObj }) => {
	const profile = JSON.parse(localStorage.getItem(profileObj));

	return profile ? <Outlet /> : <Navigate to='/auth' />;
};

export default ProtectedRoute;
