import React, { Children } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './App.css'
import {Provider} from 'react-redux'
import store from './utils/store'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import VideoContainer from './components/VideoContainer'
import Video from "./components/Video"
const Root = () => {
  return <Provider store = {store}>
  <App />
  </Provider>
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element : <Root />,
    children : [
      {
        path:"/",
        element: <VideoContainer />
      },
      {
        path: "/watch",
        element: <Video />
      }
    ]
  }
  
])
const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);