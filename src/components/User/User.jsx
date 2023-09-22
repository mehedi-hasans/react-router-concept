/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function User({user}) {
    // eslint-disable-next-line react/prop-types
    const{id, name, username,website, company } = user
    const userStyle ={
        border: '2px solid black',
        padding: '9px',
        borderRadius: '19px',
        textAlign: 'center',
        

    }
  return (
    <div style={userStyle}>
        <h1 className="font-semibold text-2xl">{id}. {name}</h1>
        <p><span className="font-medium">Username:</span> {username}</p>
        <p><span className="font-medium">Company:</span> {company.name}</p>
        <p><span className="font-medium">Website:</span> {website}</p>
        <Link className="font-bold text-white p-2 w-6/12 mx-auto block mt-2 mb-2 bg-gray-900 rounded-lg" to={`/user/${id}`}>Show Details</Link>

    </div>
  )
}
