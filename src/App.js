import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TokenProvider, { TokenContext } from "./components/TokenProvider";
import AuthRoute from "./routes/AuthRoute";
import UnAuthRoute from "./routes/UnAuthRoute";
import Index from './routes/Index';
import Login from './routes/Login';
import Register from './routes/Register';

export default function App() {
    return (
    <TokenProvider>
    <Router>
      <Switch>
        <Route exact  path="/register">
          <Register/>
        </Route>
        <UnAuthRoute path="/login">
          <Login/>
        </UnAuthRoute>
        <AuthRoute exact path="/">
          <Index />
        </AuthRoute>
        <Route exact path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
    </TokenProvider>
    )
}

