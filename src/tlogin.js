import SignIn from './login';
import SearchAppBar from './navigationappbar';

function Tlogin({onLogin}) {
  return (
   <>
   <SearchAppBar />
   <SignIn onLogin={onLogin}/>
   </>
  );
}

export default Tlogin;
