import { Link, useNavigate } from "react-router-dom"
import './Navbar.css'



export default function Navbar() {
  
  const navigate = useNavigate;

  

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-medium text-black py-2">Welcome</h2>
        
        <Link to="/login" className='font-medium underline'>Logout</Link>
    </div>
  );
}
