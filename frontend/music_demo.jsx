import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter, { Router, Route, IndexRoute, hashHistory } from 'react-router';
// const Router = ReactRouter.Router;
// const Route = ReactRouter.Route;
// const IndexRoute = ReactRouter.IndexRoute;
// const hashHistory = ReactRouter.hashHistory;

import App from './components/app';
import TrackIndex from './components/track_index';

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TrackIndex} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(appRouter, document.getElementById('content'));
});
