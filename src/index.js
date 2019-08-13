import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // relative import
import './index.css'; // relative import enabled by webpack

ReactDOM.render(<App />, document.getElementById('root'));