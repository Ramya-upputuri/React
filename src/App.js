
// import { useReducer } from 'react';
// import React, { useRef, useState } from 'react';
import { useCallback, useState } from 'react';
import './App.css';
// import Class from './Class1';
// import Title from './Title';
// import './Title.css';
// import Restaurent from './Restaurent';
// import some from './data';
// import React ,{ useEffect, useState } from 'react';
//import all components in app


// function App() {
//   return (
//     <div className="App">
//       {/* <Class/>
//       <Image/>

//       <Title/>
//       <Details/> */}  
//       {/* <Restaurent name="Ramya"/> */}
//       <Restaurent image={srikanya.image} restaurentName={srikanya.restaurentName} Cuisines={srikanya.Cuisines} Rating={srikanya.Rating} />
      

     
//     </div>
//   );
// }


// function Details(){
//   let person ={
//     name:"Chandu",
//     place:"HYD"
//   }
//   return(
//     <div>
//     <h1 style={{color:'blue',fontSize:'10px'}}>{person.name} I am comming from {person.place}</h1>
//     </div>
//   );
// }


// const Image=()=>{
//   return(
//     <>
//     <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" height={500}/>
//     </>
//   )
// }


// let image = "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
// let restaurentName="Srikanya"
// let Cuisines= "Cuisines: italic,chinese,indian"
// let Rating = "Rating:5star"

// const Restaurent = (props)=>{
//   console.log (props)
//   return(
//     <>
//     <img src={image} />
//     <h3>{restaurentName}</h3>
//     <h3>{Cuisines}</h3>
//     <h3>{ Rating}</h3>
//     </>
//   )
// }

// let srikanya ={
//   image:"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
//   restaurentName : "srikanya",
//   Cuisines : "Cuisines: italic,chinese,indian",
//   Rating:"Rating:5star",
// }
// let Restaurent=(props)=>{
//   return(
//     <>
//     <img src={props.image}/>
//     <h3>{props.restaurentName}</h3>
//     <h3>{props.Cuisines}</h3>
//     <h3>{props.Rating}</h3>
//     </>
//   )
// }



// function App() {
//   return (
//     <>
//     {
//     data.map((eachobj)=>{
//        const{image,restaurentName,Rating}=eachobj;
//       return <Restaurent  image={image} restaurentName={restaurentName} Rating={Rating}/>
//       // return <Restaurent  image={eachobj.image} restaurentName={eachobj.restaurentName} Rating={eachobj.Rating}/>
//      })
//   }
//     </>
//   )
// }

// Hoocks 1.useState - used to create variables, variables are created inside the array, variables are data(used to show the data) &setData (used to update the data)


// 2.useeffect - fetch the data from api

// function App(){
//   const[data,setData]=useState(10)
//   const changeHandler=()=>{
//     setData(data-2)
//   }
//   const increaseHandler=()=>{
//     setData(data+2)
//   }
//   return(
// <>
// <button onClick={changeHandler}>-</button>
// <span>{data}</span>
// <button onClick={increaseHandler}>+</button>
// </>
//   )
// }

// use state example 
// import some from './data';
// function App(){
//   const[data,setData]=useState(some)
//   const delteHandler=(receveid)=>{
//     const filterdata = data.filter((eachobj)=>{
//       return eachobj.id !== receveid
      
//     })
//     setData(filterdata)
//   }
//   return(
//     <div className='container'>
//       <ul>
//         {
//           data.map((eachobj)=>{
//             const{image, restaurentName,Cuisines,Rating,id}=eachobj
//             return(
//               <li key={id}>
//                 <div><img src={image} alt='hg'/></div>
//                 <h3>{restaurentName}</h3>
//                 <h3>{Cuisines}</h3>
//                 <h3>{Rating}</h3>
//                 <button onClick={()=>delteHandler(id)}>Delete</button>
//               </li>
//             )
//           }
//           )
//         }
//       </ul>
//     </div>

//   )
//       }
      

// useeffect
// function App(){

//   const URL ='https://jsonplaceholder.typicode.com/users'
//    const [usersData,setusersData]=useState([])
    
//    const fetchUsersData= async (apiURL)=>{
//     const response = await fetch(apiURL)
//     const data = await response.json()
//     setusersData(data)
//    }

//    useEffect(()=>{
//     fetchUsersData(URL)
//    },[])


//    return(
//     <>
//     <ul>
//       {
//         usersData.map((eachobj)=>{
//           const{name,username,email,id}=eachobj
//           return(
//           <li key={id}>
//             <h3>{name}</h3>
//             <h3>{username}</h3>
//             <h3>{email}</h3>
//           </li>

//           )

//         })
//       }
//     </ul>
//     </>
//    )
// }
// Usercontext: it is used to transfer the data from parent to chaild
// import React from 'react';
// import Title from './Title';

//  export const usercontext = React.createContext()

// function App(){
//   let data={
//     name:"Ramya",
//     age:25,
//   }
//   return(
//     <>
//     <div className='App'>
//    <usercontext.Provider value={data.name}>
//    <Title/>
//    </usercontext.Provider>
//    </div>
//     </>
//   )
// }

// useReducer
// const initialisation={count:0}
// function reducer(state,action){
//   switch(action.type){
//     case 'increament':
//       return{count:state.count+1}
//       case 'decreament':
//       return{count:state.count-1}
//       default:
//         throw new Error()

//   }
// }
// function App(){
//   const[state,dispatch]=useReducer(reducer,initialisation)
//   return(
// <>
// count:{state.count}
// <button onClick={()=>dispatch({type:'decreament'})}>-</button>
// <button onClick={()=>dispatch({type:'increament'})}>+</button>
// </>
//   )
// }
 
// import CounterReducer from './UseReducerEx';
// function App(){
//   return(
//     <>
//     {/* <CounterReducer/> */}
//     </>
//   )
// }


// function App(){
//   const ref = useRef(0)
//   function handleClick(){
// ref.current = ref.current+1
// alert("clicked"+ref.current+"times!")
//   }
//   return(
//       <button onClick={handleClick}>Share the post</button>
//   )
// }


 
// import Watch from './stopWatch';
// import React from 'react';

// function App(){
//   return(
//     <>
//       <Watch/>
//     </>
//   )
// }

// import Cocktail from './DrinksApp';
// import './DrinksApp.css';
//   function App(){
//     return(
//       <>
//         <Cocktail/>
//       </>
//     )
//   }

//useMemo
// function App(){
//  const [count,setcount]=useState(0);
//  const[Number,setNumber]=useState(20);
//  const factorial=React.useMemo(()=>fact(Number),[Number])
//  const handleChange=()=>{
// setcount(count+1)
//  }
//   return(
//     <>
//     {factorial}
//     <button onClick={handleChange}>Share</button>
//     {count}
//     </>
//   )
// }
// const fact=(n)=>{
//   let answer =1;
//   for(var i=n;i>=1;i--){
//     answer=answer*i
//   }
//   console.log("factorial called")
//   return answer
// }

// import Memo from './usememo';
// function App(){
//   return(
//     <>
//     <Memo/>
//     </>
//   )
// }

// UseCallback
// import Button from './Button';
// import Count from './Count';
// function App(){
//   const[age,setAge]=useState(0)
//   const[salary,setSalary]=useState(7000)

//   const increamentAge=useCallback(()=>{
//    setAge(age+1)
//   },[age])

//   const increamentSalary=useCallback(()=>{
//     setSalary(salary+1)
//   },[salary])
//   return(
//     <center>
//     <Count text={"age"} number={age}/>
//     <Button clickHandler={increamentAge}>Increment Age</Button>
//     <Count text={"salary"} number={salary}/>
//     <Button clickHandler={increamentSalary}>Increment Salary</Button>
//     </center>
//   )
// }


// import Usersdata from './Task1';
// function App(){
//   return(
//     <>
//     <Usersdata/>
//     </>
//   )
// }
//   export default App;

import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Pagenotfound from './Pagenotfound';
import Navbar from './Navbar';
import Success from './Success';
import Restaurents from './Restaurents';
import Existing from './Existing';
import New from './New';
import Products from './Products';
import Productsview from './Productsview';
// Install npm install react-router dom  
function App () {
  return (
    <div className='App'>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>  
        <Route path='/Contact' element={<Contact/>}>.....</Route>
        <Route path='/Service' element={<Service/>}>Service</Route>
        <Route path='/About' element={<About/>}>About</Route>
        <Route path='*' element={<Pagenotfound/>}></Route>
        <Route path='/Success' element={<Success/>}></Route>
        <Route path='/Restaurents' element={<Restaurents/>}>
          <Route index element={<Existing/>}></Route>
          <Route path='Existing' element={<Existing/>}></Route>
          <Route path='New' element={<New/>}></Route>
          </Route>
          <Route path='/Products' element={<Products/>}></Route>
          <Route path='/Products/:id' element={<Productsview/>}></Route>
      </Routes>
    </div>
  )
}

export default App

