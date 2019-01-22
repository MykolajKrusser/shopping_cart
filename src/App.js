import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';

import ProdNav from './components/UI/ProdNav/ProdNav';
class App extends Component {
  
  render() {
    return (
      <Layout>
        <ProdNav link='meat'>Meat</ProdNav>
      </Layout>
    );
  }
}

export default App;
