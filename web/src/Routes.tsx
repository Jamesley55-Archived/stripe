import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loginView } from "./modules/user/loginView";
import { registerView } from "./modules/user/registerView";
import { meView } from "./modules/user/meView";
import SubscribeUser from "./modules/user/account/SubscribeUser";

export class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={loginView} />
          <Route path="/register" component={registerView} />
          <Route path="/me" component={meView} />
          <Route path="/subscription" component={SubscribeUser} />
        </Switch>
      </BrowserRouter>
    );
  }
}
