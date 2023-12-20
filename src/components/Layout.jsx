import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';

export const Layout = () => {
  return (
    <>
      <header className="nav nav-pills nav-fill">
        <NavLink className="nav-item nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item nav-link" to="/signup">
          SingUp
        </NavLink>
        <NavLink className="nav-item nav-link" to="/register">
          Register
        </NavLink>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
