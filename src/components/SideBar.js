import React from 'react'
import {useSelector} from 'react-redux'

const SideBar = () => {
  const sideBarClosed = useSelector(state => state.app.sideBarClosed)
  if(sideBarClosed) return null;
  return (
    <div className="border border-red-700 text-center p-5 text-gray-700">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        <li>Subscriptions</li>
        
      </ul>
    </div>
  )
}

export default SideBar