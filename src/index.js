import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './App.css'
import {Provider} from 'react-redux'
import store from './utils/store'

const Root = () => {
  return <Provider store = {store}>
  <App />
  </Provider>
}
const root = createRoot(document.getElementById('root'));
root.render(<Root/>);