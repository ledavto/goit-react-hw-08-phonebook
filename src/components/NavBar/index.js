import { Navigation } from 'components/Nav';
import { NavAuth } from 'components/NavAuth';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';

export const NavBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <NavAuth />}
    </>
  );
};
