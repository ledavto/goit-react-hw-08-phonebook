import { useSelector } from "react-redux";

export default function Home() {
 const userName = useSelector(state => state.auth.user.name);

  return (
    <div className="container d-flex align-items-center justify-content-center">
      {userName ? <h1> Hello {userName}! This is your PHONEBOOK! </h1> : <h1> Welcome to personal PHONEBOOK! </h1>}
      
    </div>
  );
}
