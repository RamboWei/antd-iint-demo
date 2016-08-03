import React, { Component, PropTypes } from 'react';
import MainLayout from '../layouts/MainLayout';

const App = React.createClass({
  render() {
    console.log('App: ', this.props.children)
    return (
      <MainLayout>
        {this.props.children}
      </MainLayout>
    );
  }
})

App.propTypes = {
};

export default App;
