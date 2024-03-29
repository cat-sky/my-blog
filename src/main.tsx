import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import IndexRouter from '@/screens/index-router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <IndexRouter/>
        </BrowserRouter>
    </React.StrictMode>,
)
