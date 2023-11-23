import supabase from "./supabase";

export default async function userDetails( userDetilss ) {
  // const user=supabase.auth.user();
  // console.log(user.id)
  const { data, error } = await supabase
    .from("ServiceProvider-details")
    .insert([userDetilss]);
    
  if (error){
  console.log(error) 
throw new Error("faild to insert detaisl");}
  return {data,};
}
