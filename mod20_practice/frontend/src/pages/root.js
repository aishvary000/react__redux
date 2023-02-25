import { Outlet,useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLayout()
{
    // const navigation = useNavigation();
    
    return(
        <>
            {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
            <MainNavigation/>
            <Outlet/>
        </>
    )
}
export default RootLayout;