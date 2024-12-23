import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root
);
