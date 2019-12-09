import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../screens/Dashboard';
import { Downloads } from '../screens/Downloads';
import { Settings } from '../screens/Settings';

export const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/downloads">
        <Downloads />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
};
