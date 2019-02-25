import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Layout from '../Layout/Layout';

/**
 * App component is the overall wrapper of this application, this do not contain
 * connection to the data, just contains the corresponding layout
 *
 * @author Jorge Nole
 * @class
 */
class App extends Component {
  /**
   * Render this Component on each state change
   * @return {React.Component}
   */
  render() {
    return (
      <Layout />
    );
  }
}

export default App;
