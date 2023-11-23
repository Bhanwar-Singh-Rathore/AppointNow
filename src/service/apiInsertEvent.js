import supabase from "./supabase";

export  async function InsertEvent(calender_Event) {
   
const { data, error } = await supabase
.from('calendar-events')
.insert(
[   calender_Event]
)
.select()

if (error) throw new Error(error.message);

return data;
}


