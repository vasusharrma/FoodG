import {useRouteError} from "react-router-dom";

const Error = () => {

   const err  = useRouteError();

   return(
       <div>
           <h2>OOPS!</h2>
           <h4>{err.status} : {err.statusText}</h4>

       </div>
   )

}
export default Error;