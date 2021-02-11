import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import MoneyAllocation from "./screens/MoneyAllocation/MoneyAllocation";
import SignIn from "./screens/SignIn/SignIn";
import Next from "./screens/SignUp/Next/Next";
import SignUp from "./screens/SignUp/SignUp";

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
              <Route exact path="/allocate" component={MoneyAllocation} />
            </Layout>
          )}
        />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
