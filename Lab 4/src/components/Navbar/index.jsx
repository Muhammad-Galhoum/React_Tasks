import { NavLink } from "react-router-dom"

export const Navbar = ()=> {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink className="navbar-brand" to="/">Todo</NavLink>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">

      <li className="nav-item">
        <NavLink className="nav-link" to="/posts">Posts</NavLink>
      </li>

      <li class="nav-item">
        <NavLink className="nav-link" to="/users">Users</NavLink>
      </li>

      <li class="nav-item">
        <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
      </li>

    </ul>
  </div>
</nav>);
}