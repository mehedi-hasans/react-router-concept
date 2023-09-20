import { useLoaderData } from "react-router-dom"
import User from "../User/User";

export default function Users() {
    const users = useLoaderData();
    const usersStyle ={
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '15px',
        width: '80%',
        margin: 'auto'
    }
  return (
    <div>
        <h2 className="text-3xl font-bold text-center py-6">Our Users: {users.length}</h2>
        <div style={usersStyle}>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    </div>
  )
}
