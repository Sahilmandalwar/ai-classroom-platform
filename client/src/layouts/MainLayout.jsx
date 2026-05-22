import {Outlet} from 'react-router-dom';
import Navbar from '../components/navbar.jsx';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
