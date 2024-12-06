import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Page from './components/Page';
import Layout from './components/Layout';
import YayPage from './components/YayPage';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/yay" element={<YayPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
