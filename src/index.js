import React from 'react';
import ReactDOM from 'react-dom';
// 正式用
import App from './components/App';
// 測試用
// import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
