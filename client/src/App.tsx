import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing-Page/LandingPage';
import Auth from './pages/Auth/Auth';
import Talent from './pages/Talent/Talent';
import Employer from './pages/Employer/Employer';
import ProtectedRoute from './components/util/ProtectedRoute';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/users';
import { talentReducer } from './reducers/talents';
import ShowTalent from './pages/Talent/ShowTalent';
import TalentOffer from './pages/Talent/TalentOffer';
import EmployerOffer from './pages/Employer/EmployerOffer';
import GetRanked from './pages/Talent/GetRanked';
import TalentHire from './pages/Talent/TalentHire';

const store = configureStore({
	reducer: {
		user: userReducer,
		talents: talentReducer,
	},
});

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<SnackbarProvider>
					<Routes>
						<Route path='/' element={<LandingPage />} />
						<Route path='/auth' element={<Auth />} />
						<Route path='/talent/:id' />
						<Route
							path='/talent'
							element={
								<ProtectedRoute profileObj='talentProfile' />
							}
						>
							<Route path='/talent' element={<Talent />} />
						</Route>
						<Route
							path='/talent/:id'
							element={
								<ProtectedRoute profileObj='talentProfile' />
							}
						>
							<Route
								path='/talent/:id'
								element={<ShowTalent />}
							/>
						</Route>
						<Route
							path='/offers/talent/:id'
							element={
								<ProtectedRoute profileObj='talentProfile' />
							}
						>
							<Route
								path='/offers/talent/:id'
								element={<TalentOffer />}
							/>
						</Route>
						<Route
							path='/talent/getranked/:id'
							element={
								<ProtectedRoute profileObj='talentProfile' />
							}
						>
							<Route
								path='/talent/getranked/:id'
								element={<GetRanked />}
							/>
						</Route>
						<Route
							path='/talent/hire/:id'
							element={
								<ProtectedRoute profileObj='talentProfile' />
							}
						>
							<Route
								path='/talent/hire/:id'
								element={<TalentHire />}
							/>
						</Route>
						<Route
							path='/offers/employer/:id'
							element={
								<ProtectedRoute profileObj='employerProfile' />
							}
						>
							<Route
								path='/offers/employer/:id'
								element={<EmployerOffer />}
							/>
						</Route>
						<Route
							path='/employer'
							element={
								<ProtectedRoute profileObj='employerProfile' />
							}
						>
							<Route path='/employer' element={<Employer />} />
						</Route>
					</Routes>
				</SnackbarProvider>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
