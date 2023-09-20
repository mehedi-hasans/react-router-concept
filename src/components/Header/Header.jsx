import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{background: 'skyblue', padding: '15px', color: 'white'}}> 
        <h1>React Router Concept</h1>
        <Link style={{color: 'white', textDecoration:'none'}} to='/'>Home</Link>
        <Link style={{color: 'white', textDecoration:'none'}} to='/about'>About</Link>
        <Link style={{color: 'white', textDecoration:'none'}} to='/users'>Users</Link>
        <Link style={{color: 'white', textDecoration:'none'}} to='/contact'>Contact</Link>
    </div>
  )
}
