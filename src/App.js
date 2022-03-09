import './App.css';
import StandardList from './StandardList';
import ActiveWorkout from './ActiveWorkout';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import { UserAuthContextProvider } from './UserAuthContext';
import SignUp from './SignUp';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <UserAuthContextProvider>
        <Routes>
        <Route exact path="/" element={<Login />}>
          </Route>
          <Route exact path="/SignUp" element={<SignUp />}>
          </Route>
          <Route exact path="/Home" element={<Layout />}>
          <Route exact path="Landing" element={<LandingPage />}>
          </Route>
          <Route exact path="Blog" element={<StandardList />}>
          </Route>
          <Route exact path="Active" element={<ActiveWorkout />}>
          </Route>
          </Route>
        </Routes>
        </UserAuthContextProvider>
      </div>

    </BrowserRouter>


  );
}

export default App;
