import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeRoute from './HomeRoute';
import ProductDetailRoute from './ProductDetailRoute';

const Routes = () => {
  return (
    <Switch>
      <Route component={HomeRoute} exact path="/" />
      <Route component={ProductDetailRoute} path="/product/:productName" />
    </Switch>
  );
};

export default Routes;
