import React, { Suspense, lazy } from 'react';
import Layout from './ui/Layout';
import Routing from './ui/Routing';
import ThemeToggler from './ui/ThemeToggler';

const Button = lazy(() => import('app2/Button'));

function App() {
  return (
    <Layout>
      <Button />
      <ThemeToggler />
      <Routing />
      <Suspense fallback={<div>Loading Button...</div>}></Suspense>
    </Layout>
  );
}

export default App;
