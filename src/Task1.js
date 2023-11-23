import React from "react";
const Data=[
    {
        Name:"Chandu",
        Age:23,
        id:1,
    },
    {
        Name:"Ramya",
        Age:23,
        id:2,
    },
    {
        Name:"Sindhu",
        Age:22, 
        id: 3, 
    },
    {
        Name:"Navya",
        Age:25,
        id:4,
    }

]
const Usersdata=()=>{
    const[username,setUsername]= React.useState("")
    const[data,setData]=React.useState([Data])
    const handledata=()=>{
        alert("click me")  
    }
    console.log(data)
    return(
        
<>
<input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
<button onClick={handledata}>Submit</button>
{/* <ul>
    {
        data.map=((eachobj)=>{
            const[Name,Age,id]=eachobj
            return(
                <li key={id}>
                    <h4>{Name}</h4>
                    <h4>{Age}</h4>
                </li>
            )
        })
    }
</ul> */}
</>
    )
}
export default Usersdata;