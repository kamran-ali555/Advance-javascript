// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
import {fetchData} from "../components/API/api"
import { useEffect, useState } from "react";
const Users = () => {
  const [usersData, setUsersData] = useState<any>([])
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  
  useEffect(()=>{
    const userData = async () =>{
    try {
      const res = await fetchData();
      console.log(res.data, "1122");
      setIsLoading(false)
      return res.status === 200 ? setUsersData(res.data) : []
    } catch (error) {
      setIsError(true)
     return console.log(error, "1122");
    };
  };
  userData();
})




  // const {data} = useQuery({
  //   queryKey: ["post"],
  //   queryFn: userData
  // })
// console.log(error, isError);

if(isLoading) return <h1 className="text-green-500 text-center">Loading...</h1>
if(isError) return <h1 className="text-red-600 text-center">Error</h1>
  
  return (
    <div className="grid grid-cols-3 mb-10">
      {
          usersData.map((post:any, index:number) => (
            <div
              key={index}
              className="bg-white rounded-sm p-4 hover:shadow-md border border-gray-200 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">{post.name}</h3>
                {/* <p className="text-sm text-gray-600">{post.login}</p> */}
                <p>{post.username}</p>
                <span className="text-xs text-green-500 font-medium">
                  {post.id}
                </span>
                <p>email</p>
              </div>
            </div>
          ))
      }
      <div>
      </div>
    </div>
  )
}

export default Users
