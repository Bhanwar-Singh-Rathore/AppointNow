// import GoogleCalendar from "./GoogleCalendar";
import { useEvents } from "./useFetchData";

function Events() {
    const {Events ,isLoading,}=useEvents();
    // console.log(Events);
    if(isLoading)return ("loading........");
  

    return (
        <div>
            {/* {Events.map((Events)=><GoogleCalendar data={Events.user_name} key={Events.id}/>)}
            consol.log(data); */}
        </div>
    )
}

export default Events
