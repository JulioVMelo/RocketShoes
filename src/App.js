import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Header from './components/header';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes/>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
