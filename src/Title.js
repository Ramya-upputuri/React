//   function Title(){
//     return(
// <div id="one">Hello</div>
//     )
// }
// export default Title;

import { usercontext } from "./App";
import React from "react";

const Title=()=>{
  return(
    <div>
<usercontext.Consumer>
  {value=><div>{value}</div>}
</usercontext.Consumer>
</div>
  )
}
export default Title;