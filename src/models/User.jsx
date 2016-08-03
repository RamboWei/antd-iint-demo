import React, { Component, PropTypes } from 'react';
import List from '../components/list/index'

const __configs = {
  'user_list': {
    queryUrl: '/app/site/user_list_port'
  }
};

const _Model = React.createClass({

  render() {
    const _views = this.props.route.path
    console.log(this,'\n',this.props.location)
    let _view = require('../components/list/index');
    return (
      <List />
    );
  }
})

_Model.propTypes = {
};

export default _Model;
