import './NavBar.css';
import { Link } from 'react-router-dom';
export default function NavBar(){
    return(
        <div className='nav'>
            <div className='list'>
                <Link to="/dashboard" className='text'>Dash Board</Link>
                <Link to="addcard" className='text'>Add Card</Link>
                <Link to="adminpanel" className='text'>Admin Panel</Link>
            </div>
        </div>
    );
}