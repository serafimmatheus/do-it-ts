import { Switch } from "react-router-dom";
import { Route } from "./Routes";
import { Login } from "../Page/Login";
import { Dashboard } from "../Page/Dashboard";
import { Register } from "../Page/Register";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);
