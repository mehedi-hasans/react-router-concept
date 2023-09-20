import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Home() {
  return (
    <div>
        <Header></Header>
        <h1>Hey Home</h1>
        <h1>THis is HOme page</h1>
        <Outlet></Outlet>
    </div>
  )
}
