import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from '~/components';

import { Home } from '~/containers';

const HomeRoute = () => {
  return (
    <Home>
      <Header />

      <Switch>
        <Route component={Home} exact path="/" />
      </Switch>
    </Home>
  );
};

export default HomeRoute;
