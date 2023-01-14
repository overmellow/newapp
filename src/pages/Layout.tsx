import { Link, Outlet } from "react-router-dom";
import AuthStatus from "./AuthStatus";

export default function Layout() {
    return (
      <div>
        <AuthStatus />
  
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/humans">Humans</Link>
          </li>
          <li>
            <Link to="/persons">Persons</Link>
          </li>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="/canvas">Canvas</Link>
          </li>
        </ul>
  
        <Outlet />
      </div>
    );
  }
  