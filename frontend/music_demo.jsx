import ReactRouter from 'react-router';
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const App = require('./components/app');
const PostIndexStore = require('./stores/post_index_store');
const PostIndex = require('./components/post_index');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="/tracks/" component={ PostShow } />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(appRouter, document.getElementById('content'));
});
