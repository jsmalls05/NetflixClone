import "./app.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className = "App" >
        <Route exact path="/" component={Login}/>
        <Route exact path="/Register" component={Register}/>        
        <Route path="/Main" component={Home}/>
        <Route path="/Watch" component={Watch}/>
    </div>
    <h2>NetFlix Clone</h2>
    </BrowserRouter>
  );
}

export default App;
