import { useState } from "react"

const URL="https://jsonplaceholder.typicode.com/albums";
function Exa(){
   const [usersdata,setusersdata]=useState([]);
   const fetchData= (apiURL)=>{
    const response=fetch(apiURL)
    const{Users}=response.json()
    setusersdata(Users)
   }
   
    return(
        <>
{
usersdata.map((eachdata)=>{
   const {userId,id,title}=eachdata;
   return(
<ul key={id}>
<div>{userId}</div>
<div>{title}</div>
</ul>
   )
})
     }     </>
    )
}
export default Exa;