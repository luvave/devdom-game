import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ErrorFallback } from './components/ErrorFallback';
import './main.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const errorHandler = (error: Error, info: { componentStack: string }) => {
  // TODO: Fix
  // eslint-disable-next-line no-console
  console.error(error, info);
};

// Render the app
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
