import React,{useState,useEffect} from "react";
const URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Cocktail =()=>{
    const[usersData,setUserData]=useState([]);
    const[searchTerm,setSearchterm]=useState('');
    const [loading,setLoading]=useState(false);
    const[isError,setIsError]=useState({status:false,msg:''});


    const fetchData = async (apiURL) => {
        const response = await fetch(apiURL);
        const {drinks}=await response.json();
        setUserData(drinks)
        if(!drinks){
            throw new Error("Data not found")
        }
    }

    return(
        <>
        <div className="container">
            <div className="parent">
             <input type="text" placeholder="Search..." value={searchTerm} onChange={(e)=>setSearchterm(e.target.value)}/>
            </div>
            <hr/>
            {
            usersData.map((eachDrink)=>{
                const {strDrinkThumb, strDrink,idDrink}= eachDrink;
                return<li key={idDrink}>
                <div className="image"><img src={strDrinkThumb} alt=""/></div>
                <div className="brandName">{strDrink}</div>
                </li>
            })}

        </div>
        </>
    )
}
export default Cocktail;