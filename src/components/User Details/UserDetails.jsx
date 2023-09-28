/* eslint-disable react/prop-types */

import { Link, useLoaderData } from "react-router-dom"

export default function UserDetails() {
    const user = useLoaderData()
    const{name,phone,email, address ,website} = user
  return (
    <div className="mx-auto w-6/12 my-20 font-medium text-lg rounded-lg border p-8">
        <h2>Name: {name}</h2>
        <h3>Website: {website}</h3>
        <p> Phone: {phone}</p>
        <p> Email: {email}</p>
        <p> <small>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</small></p>
        <Link className="bg-indigo-950 text-white block mt-4  text-center w-3/6 py-2 rounded-lg font-semibold" to='/users'><button>Go Back</button></Link>
    </div>
  )
}
