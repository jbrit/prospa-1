import React from 'react';
import Layout from './components/Layout/Layout';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className='App'>
      {/* <h1>Hello World</h1> */}
      <Layout>
        <SignIn />
      </Layout>
    </div>
  );
}

export default App;
