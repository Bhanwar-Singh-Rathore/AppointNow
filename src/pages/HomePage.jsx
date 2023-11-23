import { NavBar } from "../components/NavBar"
import HomeComp1 from "../components/HomeComp1"
import Footers from "../components/Footers"
import Homepage3 from "../components/Homepage3"
import Homepage4 from "../components/Homepage4"
import Homepage5 from "../components/Homepage5"
// import BussinessForm from "../components/Login/BussinessForm"
function HomePage() {
    return (
        <div>
            <NavBar/>
            <HomeComp1/>
            <Homepage3/>
            <Homepage4/>
            <Homepage5/>
            <Footers/>
            {/* <BussinessForm/> */}
        </div>
    )
}

export default HomePage
