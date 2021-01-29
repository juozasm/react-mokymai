import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TokenProvider, { TokenContext } from "./components/TokenProvider";
import AuthRoute from "./routes/AuthRoute";
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
        {/* todo: Padaryti login tik neprisijungusiems */}
        <Route path="/login">
          <Login/>
        </Route>
        <TokenContext.Consumer>
            {([token])=> (
              <AuthRoute isAuthorized={token} exact path="/">
                <Index token={token}/>
              </AuthRoute>
          )}
        </TokenContext.Consumer>
        <Route exact path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
    </TokenProvider>
    )
}

