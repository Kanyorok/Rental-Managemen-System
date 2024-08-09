import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Aside = () => {
  return (
    <aside className="side-bar">
        <ul>
          <li>
            <span className="material-symbols-outlined">home</span>
            <Link to="#">Discover</Link>
          </li>
          <li>
            <span className="material-symbols-outlined">mail</span>
            <Link to="#">Messages</Link>
          </li>
          <li>
            <span className="material-symbols-outlined">bookmark</span>
            <Link to="#">Saved Listings</Link>
          </li>
          <li>
            <span className="material-symbols-outlined">manage_accounts</span>
            <Link to="#">Profile</Link>
          </li>
          <li className="logout-bar">
            <span className="material-symbols-outlined">logout</span>
            <Link to="#"></Link>Logout
          </li>
        </ul>
      </aside>
  )
}

export default Aside