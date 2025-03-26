import React from 'react';
import Layout from './ui/Layout';
import Routing from './ui/Routing';
import ThemeToggler from './ui/ThemeToggler';

function App() {
  return (
    <Layout>
      <Routing />
      <ThemeToggler />
    </Layout>
  );
}

export default App;
