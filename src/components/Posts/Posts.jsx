import { useLoaderData } from "react-router-dom"
import Post from "../Post/Post"

export default function Posts() {
    const posts = useLoaderData()
  return (
    <div className="">
        <h1 className="font-semibold text-2xl pt-5 text-center border-b mb-3">POSTS <span className="text-indigo-900 font-bold">{posts.length}</span></h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-40">
        {
            posts.map(post => <Post key={post.id} post={post}></Post>)

        }
    </div>
    
    </div>
  )
}
