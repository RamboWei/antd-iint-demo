import ReactDOM from 'react-dom';
import React from 'react';
//layout
import Layout_aside from './Aside/index';
import Layout_header from './Header/index';
import Layout_container from './Container/index';
import Layout_footer from './footer/index';
//

const MainLayout = React.createClass({
  render() {
    return (
      <div className="layout-wrapper">
        <Layout_header></Layout_header>
        <Layout_aside></Layout_aside>
        <Layout_container>
          123
        </Layout_container>
        <Layout_footer></Layout_footer>
      </div>
    );
  }
});

export default MainLayout;
