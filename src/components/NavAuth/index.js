import { NavLink } from 'react-router-dom';

export const NavAuth = () => {
  return (
    <div className="d-flex justify-content-end">
      <NavLink className="nav-item nav-link" to="/signup">
        SingUp
      </NavLink>
      <NavLink className="nav-item nav-link" to="/register">
        Register
      </NavLink>
    </div>
  );
};
