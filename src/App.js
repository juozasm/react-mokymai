import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TokenProvider from "./components/TokenProvider";
import AuthRoute from "./components/AuthRoute";
import UnAuthRoute from "./components/UnAuthRoute";
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Logout from "./routes/Logout";
import Product from "./routes/Product";
import Error from "./routes/Error";

export default function App() {
    return (
    <TokenProvider>
    <Router>
      <Switch>
        <Route exact path="/blog">
            <h1>Blog</h1>
        </Route>
        <UnAuthRoute exact  path="/register">
          <Register/>
        </UnAuthRoute>
        <UnAuthRoute  path="/login">
          <Login/>
        </UnAuthRoute>
        <AuthRoute exact path="/">
          <Home />
        </AuthRoute>
        <AuthRoute exact path="/products/:productId">
          <Product/>
        </AuthRoute>
        <AuthRoute exact path="/logout" to="/blog">
          <Logout/>
        </AuthRoute>
        <Route exact path="/error/:status/:error">
          <Error/>
        </Route>
        <Route path="*">
          <Redirect to="/error/404/Page not found"/>
        </Route>
      </Switch>
    </Router>
    </TokenProvider>
    )
}

