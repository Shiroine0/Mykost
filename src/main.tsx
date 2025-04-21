import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes/Routes';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import { SearchProvider } from "./components/searchcontext";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </React.StrictMode>,
);
