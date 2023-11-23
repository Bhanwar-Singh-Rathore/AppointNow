import { useQuery, useQueryClient } from "@tanstack/react-query";
// import shopDetails from "../service/shopDetails";
// import { useParams } from "react-router-dom";
import { FetchEvents } from "../service/apiFetchEvents";
import { useUser } from "../user/useUser";

export function useEvents (){
  const queryClient = useQueryClient()

  queryClient.invalidateQueries({ queryKey: ["details"] })
 const {user}=useUser();

  const {
    isLoading,
    data: Events,
    error,
  } = useQuery({
    queryKey: ["Events", user.id],
    queryFn: () =>FetchEvents(user.id),
    retry: false,
  });
// console.log(Events);
  return { isLoading, error, Events };
}
