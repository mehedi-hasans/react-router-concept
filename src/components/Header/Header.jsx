import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-zinc-900 text-center py-8 text-gray-200 flex justify-between px-40"> 
        <h1 className="font-bold text-2xl">React Router Concept</h1>
        <div className="space-x-9 font-semibold text-xl">
        <Link style={{color: 'white', textDecoration:'none'}} to='/'>Home</Link>
        <Link style={{color: 'white', textDecoration:'none'}} to='/about'>About</Link>
        <Link style={{color: 'white', textDecoration:'none'}} to='/users'>Users</Link>
        <Link style={{color: 'white', textDecoration:'none'}} to='/posts'>Posts</Link>
        <Link style={{color: 'white', textDecoration:'none'}} to='/contact'>Contact</Link>
        </div>
    </div>
  )
}
