import { Link, useLoaderData } from "react-router-dom"

export default function PostDetails() {
    const post = useLoaderData()
    const {id, title, body} = post
  return (
    <div className="mx-40 border rounded-lg p-16 m-40 space-y-4">
        <h3 className="font-bold text-xl">Post Details Id: {id}</h3>
        <h4><span className=" font-semibold text-red-500">Title: </span> {title}</h4>
        <p><span className=" font-semibold text-red-500">Details: </span> {body}</p>
        <Link className="bg-indigo-950 text-white block mt-4  text-center w-3/6 py-2 rounded-lg font-semibold" to='/posts'><button>Go Back</button></Link>
    </div>
  )
}
