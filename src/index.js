import React from 'react'
import ReactDOM from 'react-dom/client'
// import style from "./app/App.css";
// import { Theme } from "models";

import { App } from './app'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)