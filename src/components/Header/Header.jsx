import { Link, NavLink } from "react-router-dom";
import './Header.css'
export default function Header() {
  return (
    <div className="bg-zinc-900 text-center py-8 text-gray-200 flex justify-between px-40"> 
        <Link to="/"><h1 className="font-bold text-2xl cursor-pointer">React Router Concept</h1></Link>
        <div className="space-x-9 font-semibold text-xl">
        <NavLink style={{color: 'white', textDecoration:'none'}} to='/'>Home</NavLink>
        <NavLink style={{color: 'white', textDecoration:'none'}} to='/about'>About</NavLink>
        <NavLink style={{color: 'white', textDecoration:'none'}} to='/users'>Users</NavLink>
        <NavLink style={{color: 'white', textDecoration:'none'}} to='/posts'>Posts</NavLink>
        <NavLink style={{color: 'white', textDecoration:'none'}} to='/contact'>Contact</NavLink>
        </div>
    </div>
  )
}
