
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


export default function Home() {
  const navigation = useNavigation()
  return (
    <div>
        <Header></Header>
        
        {/* <Slider></Slider> */}
        {
          navigation.state === "loading"?
          <p>Loading..</p>:
          <Outlet></Outlet>
        }
        <Footer></Footer>
    </div>
  )
}
