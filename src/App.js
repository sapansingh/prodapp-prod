import {useState,useEffect} from "react";
import Tlogin from "./tlogin";
import Home from "./templets/home";



function App() {

  const [is_login,setis_login]=useState(true);
  
  useEffect(()=>{
    fetchusert();

  },[]);

  useEffect(()=>{
    loginhandle();

  },[is_login]);
  const fetchusert=async()=>{

    try{
      const is_loginsr=localStorage.getItem('islogin');
      const userid=localStorage.getItem('userid');
      const userroll=localStorage.getItem('userroll');

      if(is_loginsr===true){
        setis_login(true);
      }else{

        setis_login(false);
      }



    }catch(error){
      console.error("failed",error);
    }


  }
  const loginhandle=(usernamesr,userroll)=>{

   

      localStorage.setItem("is_login",true);
      setis_login(true);

  }

  return (
  
    <>
    {is_login?(<Home   />):(<Tlogin onLogin={loginhandle}/>)}
    </>

   );
}

export default App;
