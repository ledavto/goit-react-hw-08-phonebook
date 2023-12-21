import { Navigation } from 'components/Nav';
import { NavAuth } from 'components/NavAuth';

export const NavBar = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <>
      <Navigation />
      <NavAuth />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </>
  );
};
