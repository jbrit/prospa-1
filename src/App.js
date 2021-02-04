import React from 'react';
import Layout from './components/Layout/Layout';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className='App'>
      {/* <h1>Hello World</h1> */}
      <Layout>
        <SignUp />
      </Layout>
    </div>
  );
}

export default App;
