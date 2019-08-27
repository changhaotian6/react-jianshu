import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();


  // "proxy": {
  //   "/api1": {
  //     "target": "http://127.0.0.1: 90"
  //   },
  //   "/api": {
  //     "target": "http://127.0.0.1: 3000"
  //   }
  // }