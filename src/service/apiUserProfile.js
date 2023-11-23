// import { useUser } from "../user/useUser";
import supabase from "./supabase";
// const id=supabase.auth.user()

export async function userProfile(id){
    
let { data: profiles, error } = await supabase.auth
  .from('profiles')
  .slect('*').eq("id", id)
 
  if (error) throw new Error(error.message);
return profiles;
// if (error) throw new Error(error.message);
// return {ServiceProvider_details}


}

export async function insertProfile(profile){
    
  const { data, error } = await supabase
  .from('profile')
  .insert([
  profile
  ])
  .select()
   
    if (error) throw new Error(error.message);
  return  data;
  // if (error) throw new Error(error.message);
  // return {ServiceProvider_details}
  
  
  }

