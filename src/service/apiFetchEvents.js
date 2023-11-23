import supabase from "./supabase";

export async function FetchEvents(id) {
  let { data: calendar_events, error } = await supabase
    .from("calendar-events")
    .select("*")
    .eq("service_id", id);
  if (error) throw new Error(error.message);
 
  return calendar_events;
}
