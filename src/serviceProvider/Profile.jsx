// import {  useQuery } from "@tanstack/react-query"
// import { userProfile } from "../service/apiUserProfile"

import Comingsoom from "../helper/Comingsoom";
import { useUser } from "../user/useUser"

function Profile() {
   
  
const {user,isLoading}=useUser();
if(isLoading)return("loading")
    return (
        <div>
            {/* <h1>{user.id}</h1>
            coming soon........... */}
           <Comingsoom/>
        </div>
    )
}

export default Profile
