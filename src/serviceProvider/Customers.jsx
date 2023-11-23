import Comingsoom from "../helper/Comingsoom";
import { useEvents } from "./useFetchData"

function Customers() {
    const {Events, isLoading}=useEvents();
    if(isLoading)return ("loading");
    return (
        <div>
            {/* {Events.map((customers)=> <li key={customers.id}>{customers.user_name}</li>) } */}
        
            <Comingsoom/>
        </div> 
    )
}

export default Customers
