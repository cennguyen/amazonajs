import React from 'react';
import Product from './components/Product';
import data from './data';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">AmazonaJS</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign in</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {
              data.products.map(product => (
            <Product key={product._id} product={product}></Product>
              ))
            }

          </div>

        </div>

      </main>
      <footer className="row center">All Right reserved</footer>
    </div>
  );
}

export default App;
