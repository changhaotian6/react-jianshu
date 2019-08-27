import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Header from './Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <GlobalStyle></GlobalStyle>
          <BrowserRouter>
            <Header></Header>
            <Route path='/' exact component={Home} />
            <Route path='/detail' exact component={Detail} />
          </BrowserRouter>
        </Provider>
    )
  }
}

export default App;
