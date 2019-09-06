import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Header from './components/header';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes/>
        <ToastContainer autoClose={3000} position='bottom-right'/>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
