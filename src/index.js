import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/reset.scss';
import './styles/common.scss';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
