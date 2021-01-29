import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import AuthRoute from "./routes/AuthRoute";
import Index from './routes/Index';
import Login from './routes/Login';
import Register from './routes/Register';

export default function App() {

  const [token, setToken] = useState(null)
  
    return <Router>
      <Switch>
        <Route exact  path="/register">
          <Register/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <AuthRoute isAuthorized={token !== null} exact path="/">
          <Index/>
        </AuthRoute>
        <Route exact path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
}

