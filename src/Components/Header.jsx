import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="navbar bg-light">
  <div className="container">

    <Link to="/" className="navbar-brand">To-do-list</Link>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}
