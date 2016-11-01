const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const App = require('./components/app');
const TrackIndex = require('./components/track_index');

console.log("geagefaef");

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="/tracks/" component={ TrackIndex } />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(appRouter, document.getElementById('content'));
});
