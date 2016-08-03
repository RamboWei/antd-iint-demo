import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
//main
import App from '../apps/App';
import NotFound from '../apps/NotFound';
//models
import User from '../models/User'
import Order from '../models/Order'

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} >
      <Route path="user" component={User}>
        <Route path="user_list" components={{viewType:"list"}} />
        <Route path="user_add" components={{viewType:"form"}} />
        <Route path="*" component={NotFound} />
      </Route>
      <Route path="order" component={Order}>
        <Route path="order_list" components={{viewType:"list"}} />
        <Route path="order_add" components={{viewType:"form"}} />
        <Route path="*" component={NotFound} />
      </Route>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
