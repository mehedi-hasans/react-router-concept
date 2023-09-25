import { Link } from "react-router-dom"
// eslint-disable-next-line react/prop-types
export default function Post({post}) {
    // eslint-disable-next-line react/prop-types
    const {id, title} = post
  return (
    <div className="bg-indigo-950 text-slate-100 p-10 rounded-lg">
        <h1 className=" font-semibold text-xl">Post of id: {id}</h1>
        <h4><span className=" font-semibold text-red-500">Title: </span> {title}</h4>
        <Link className="bg-slate-100 text-red-500 block mt-4  text-center w-3/6 py-2 rounded-lg font-semibold" to={`/post/${id}`}>Post Details</Link>
    </div>
  )
}
