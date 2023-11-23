import supabase from "./supabase";

 export default  async function shopDetails(id){

     
const { data, error } = await supabase
.from('ServiceProvider-details')
 .select('*')
 .eq("id", id).single()


  if (error) {
    console.log(error);
    throw new Error("faild to read data");
  }
  return  data;

 }