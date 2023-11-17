import { useRef, useState } from "react"

const Watch =()=>{
    const[startTime,setstartTime]=useState(null)
    const[now,setNow]=useState(null)
    const intervalRef = useRef(null)
    function handleStart(){
        setstartTime(Date.now())
        setNow(Date.now())
        clearInterval(intervalRef.current)
        intervalRef.current=setInterval(()=>{
            setstartTime(Date.now())
        })
    }
function stoptime(){
    clearInterval(intervalRef.current)
}
let secondsPassed = 0;
if(startTime!==null && now !==null){
    secondsPassed=(startTime-now)/1000
}
    return(
        <>
        <h4>{secondsPassed.toFixed(3)}</h4>
    <button onClick={handleStart}>Start Time</button>
    <button onClick={stoptime}>Stop Time</button>+++++++
    </>
    )
}
export default Watch;


