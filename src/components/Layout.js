import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      {props.children} 
      <Navbar />       
    </React.Fragment>
  );
}

export default Layout;
