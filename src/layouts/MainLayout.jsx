import ReactDOM from 'react-dom';
import React from 'react';
//Part
import Part_aside from './particals/Aside';
import Part_header from './particals/Header';
import Part_container from './particals/Container';
import Part_footer from './particals/footer';
//

const MainLayout = React.createClass({
  render() {
    return (
      <div className="layout-wrapper">
        <Part_aside />
        <Part_header />
        <Part_container>
        </Part_container>
        <Part_footer />
      </div>
    );
  }
});

export default MainLayout;
