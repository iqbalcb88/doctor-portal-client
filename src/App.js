import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path='/appointment'>
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <DashBoard />
          </PrivateRoute>
          <Route path='/users'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
