import Dashboard from './Dashboard';
import AdminPanel from './AdminPanel';
import NavBar from './components/NavBar';
import AddCard from './AddCard';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
export default function App(){
    return(
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/adminpanel' element={<AdminPanel/>}/>
                    <Route path='/addcard' element={<AddCard/>}/>
                    <Route path='/*' element={<Navigate to='/dashboard'/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}