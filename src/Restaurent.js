let Restaurent=(props)=>{
    return(
      <>
      <img src={props.image}/>
      <h3>{props.restaurentName}</h3>
      <h3>{props.Cuisines}</h3>
      <h3>{props.Rating}</h3>
      </>
    )
  }
export default Restaurent;

