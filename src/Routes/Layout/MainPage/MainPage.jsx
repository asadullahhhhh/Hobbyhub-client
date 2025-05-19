import { Outlet } from 'react-router';
import { AuthContext } from '../../../assets/Contexts/Context';
import Navbar from '../../../Components/Navbar/Navbar';

const MainPage = () => {

    return (
      <>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </>
    );
};

export default MainPage;