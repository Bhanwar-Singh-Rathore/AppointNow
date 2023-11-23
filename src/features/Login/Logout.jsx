// import Spinner from "../../ui/Spinner"
import { useLogout } from "./useLogout"

function Logout() {
    const{logout,isLoading} =useLogout()
    // if(isLoading)return<Spinner/>
    return (
     <button className=" hover:bg-blue-500 bg-blue-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-black-300 br rounded px-4 py-1 md:ml-24 
     ml-10 mt-4 md:-mt-2" disabled={isLoading} onClick={logout}>Logout </button>
    )
}

export default Logout

