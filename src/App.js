import React from 'react';
import {Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';
import SignIn from './components/SignIn/SignIn';
import Next from './components/SignUp/Next/Next';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className='App'>
      <Route
        path={['/', '/sign-in', '/next']}
        exact
        render={() => (
          <Layout dark>
            <Route exact path='/' component={SignUp} />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/next' component={Next} />
          </Layout>
        )}
      />
      <Route exact path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
