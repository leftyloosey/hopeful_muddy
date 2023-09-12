import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem(AUTH_TOKEN);
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   };
// });

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
