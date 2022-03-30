import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.less';
import './i18n';
import HomePage from './pages/home/HomePage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
