import React from "react";
const devesh={
   backgroundColor:"black",
   color:"yellow",
   fontSize:"50px"
}
function Contactus()
{
    return(
        <>
            <h1 className="display-1">This is Contact us page</h1>
            <p style={{backgroundColor:"Cyan",color:"Navy",fontSize:"30px"}}>
            Contact us:<br/>
            Mobile no: +919726531062
            </p>
            <p style={devesh}>
                React JS is made by Facebook
            </p>
        </>
    );
}
export default Contactus;