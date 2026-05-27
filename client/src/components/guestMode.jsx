import {Navigate} from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

const GuestMode = ({children}) => {
    const {isAuthenticated} = useAuth();
    
    if(isAuthenticated) {
        return <Navigate to="/dashboard"  />
    }
    return children;
}

export default GuestMode;