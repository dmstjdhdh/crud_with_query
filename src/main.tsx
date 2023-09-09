import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ReactQueryProvider from "./Provider";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ReactQueryProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false}/>
      </ReactQueryProvider>
  </React.StrictMode>,
)
