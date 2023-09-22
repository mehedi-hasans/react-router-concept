import { useLoaderData } from "react-router-dom"
import User from "../User/User";

export default function Users() {
    const users = useLoaderData();

  return (
    <div>
        <h2 className="text-3xl font-bold text-center py-6">Our Users: {users.length}</h2>
        <div  className="grid gap-7 grid-cols-1 w-5/6 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    </div>
  )
}
