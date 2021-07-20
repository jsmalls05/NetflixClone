import "./register.scss"

export default function Register() {

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">                
                <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="" />
                <a href="/"><button className="loginButton">Sign In</button></a>                
                </div>
                
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere, anytime. Cancel anytime</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                
                    <div className="new">
                    <a href="/Main"><button className="registerButton">WATCH FREE FOR 14 DAYS</button></a>
                    </div>    
            </div>        
        </div>
    )
};


