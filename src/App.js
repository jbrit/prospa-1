import React from 'react';
import {Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SignIn from './components/SignIn/SignIn';
import Next from './components/SignUp/Next/Next';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Route exact path='/' render={() => <SignUp />} />
        <Route path='/sign-in' render={() => <SignIn />} />
        <Route path='/next' render={() => <Next />} />
      </Layout>
    </div>
  );
}

export default App;
