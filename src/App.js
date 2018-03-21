import React, { Component } from 'react';
import Headers from './components/Header'
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer'
import MessageContainer from './containers/MessageContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Headers />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />  
            <MessageContainer/>
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
