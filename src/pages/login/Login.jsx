import {Link} from "react-router-dom"
import "./login.scss"

export default function Login() {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">                
                <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="" />                 
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone Number" required/>
                    <input type="password" placeholder="Password" required/>
                    <Link to="/Main"><button>Sign In</button></Link>
                    <span>New to Netflix? <a href="/Register">Sign up now.</a></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
                    </small>
                </form>    
            </div>        
        </div>
    )
}


