import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import MoneyAllocation from "./components/MoneyAllocation/MoneyAllocation";
import SignIn from "./components/SignIn/SignIn";
import Next from "./components/SignUp/Next/Next";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path={["/", "/sign-in", "/next"]}
          exact
          render={() => (
            <Layout dark>
              <Route exact path="/" component={SignUp} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route exact path="/next" component={Next} />
            </Layout>
          )}
        />
        <Route path="/dashboard" component={Dashboard} />
        <Layout dark>
          <Route path="/allocate" component={MoneyAllocation} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
