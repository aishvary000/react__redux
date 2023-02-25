import { Outlet, useNavigation,useLoaderData,useSubmit} from 'react-router-dom';
import {useEffect} from 'react'
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const timeout = 1*60*60*1000;
  const submit = useSubmit(); //to programatically submit a form
  useEffect(() => {
    if(!token)
    return;

    if(token === 'EXPIRED')
    {
      submit(null,{action:'/logout',method:'post'});
      return;
    }
    const tokenDuration = getTokenDuration();
    
    


    setTimeout(()=>{
      submit(null,{action:'/logout',method:'post'})
    },timeout)
  },[
    token,submit
  ])
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
