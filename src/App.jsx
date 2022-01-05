import React from "react";
import Hooks from "./Hooks";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Errorpage from "./Errorpage";
import {Route,Switch} from "react-router-dom";
import Navbar from "./Navbar";
function App()
{
    return(
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={Aboutus}/>
                <Route exact path="/contact" component={Contactus}/>
                <Route component={Errorpage}/>
            </Switch>
        </>
    );
}

export default App;