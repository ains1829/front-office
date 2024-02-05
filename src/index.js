import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </SkeletonTheme>
);
