import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';

import ProdNav from './components/UI/ProdNav/ProdNav';
import {connect} from 'react-redux';

class App extends Component {
  
  render() {
    console.log(this.props.lol)
    return (
      <Layout>
        <ProdNav link='meat'>Meat</ProdNav>
      </Layout>
    );
  }
}
const mapStP = state =>{
  return{
    lol: state.reducer.lol
  };
};
export default connect(mapStP)(App) ;
