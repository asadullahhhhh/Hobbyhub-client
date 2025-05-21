import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../../Components/Navbar/Navbar';

const MainPage = () => {


  const navigation = useNavigation()
  const isNavigation = Boolean(navigation.location)

    return (
      <>
        <Navbar></Navbar>
        {isNavigation && (
          <span className="loading loading-bars loading-xl"></span>
        )}
        <Outlet></Outlet>
      </>
    );
};

export default MainPage;