import { Navigation } from 'components/Nav';
import { NavAuth } from 'components/NavAuth';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';

export const NavBar = () => {
  //   const { isLoggedIn } = useAuth();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  
  console.log('isLoggedIn', isLoggedIn)
  return (
    <>
      <Navigation />
      
      {isLoggedIn ? <UserMenu/> : <NavAuth />}
    </>
  );
};
