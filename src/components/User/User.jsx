/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export default function User({user}) {
    // eslint-disable-next-line react/prop-types
    const{id, name, username, email, address, phone, website, company } = user
    const userStyle ={
        border: '2px solid black',
        padding: '9px',
        borderRadius: '19px',
        textAlign: 'center',
        

    }
  return (
    <div style={userStyle}>
        <h1 className="font-semibold text-2xl">{id}. {name}</h1>
        <p> Username: {username}</p>
        <p> Phone: {phone}</p>
        <p> Email: {email}</p>
        <p> Website: {website}</p>
        <p> Company: {company.name}</p>
        <p> <small>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</small></p>


    </div>
  )
}
