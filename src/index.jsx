import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCreated from './components/Pages/Template/PostCreate/PostCreate';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <PostCreated />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root'),
);
