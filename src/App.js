import React from 'react';
import './App.css';
import SignUpAndLogin from './components/SignUpAndLogin/SignUpAndLogin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {AuthProvider} from './components/SignUpAndLogin/useAuth';
import User from './components/User/User';

function App() {
  return (
    <AuthProvider>
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
            <SignUpAndLogin />
        </Route>
        <Route path="/user">
          <User/>
        </Route>
      
      
      </Switch>
    </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
