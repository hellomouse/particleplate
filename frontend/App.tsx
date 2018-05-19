import * as React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import store from './store';

import IndexPage from './pages/Index';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={IndexPage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
