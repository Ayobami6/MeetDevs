import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing-Page/LandingPage';
import Auth from './pages/Auth/Auth';
import Talent from './pages/Talent/Talent';
import Employer from './pages/Employer/Employer';
import ProtectedRoute from './components/util/ProtectedRoute';
import { SnackbarProvider } from 'notistack';

const App = () => {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<Auth />} />
          <Route
            path='/talent'
            element={<ProtectedRoute profileObj='talentProfile' />}
          >
            <Route path='/talent' element={<Talent />} />
          </Route>
          <Route
            path='/employer'
            element={<ProtectedRoute profileObj='employerProfile' />}
          >
            <Route path='/employer' element={<Employer />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
};

export default App;
