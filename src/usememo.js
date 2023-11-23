import React from "react"
function Memo(){
    const[count,setcount]=React.useState(0);
    const[number,setnumber]=React.useState(5);
    const Factorial=React.useMemo(()=>fact(number),[number]);
    const handleCount=()=>{
        setcount(count+1)
    }
    const handleFactorial=()=>{
        setnumber(number+1)
    }

    return(
        <center>
        Factorial:{Factorial}<br/>
        <button onClick={handleFactorial}>Factorial Increment</button><br/>
        <button onClick={handleCount}>Counter Increment</button><br/>
        Count:{count}
        </center>
    )
}
const fact=(n)=>{
    let answer=1;
    for(var i=n;i>=1;i--){
        answer=answer*i
    }
    console.log("factoril is calling")
    return answer
}
export default Memo;