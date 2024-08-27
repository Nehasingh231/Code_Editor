import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import Home from './component/Home';
import Dataprovider from './utils/DataProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Dataprovider>
  <Home />
  </Dataprovider>
 
);


