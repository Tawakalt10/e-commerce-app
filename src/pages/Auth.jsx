export default function Auth() {
    return  ( 
    <div className="page"> 
        <div className="container">
            <div className="auth-container">
                <h1 className="page-title">
                    Signup
                </h1>
           <form className="auth-form">
             <div className="form-group">
             <label className="form-label" htmlFor="email"> Email</label>
             <input className="form-input" type="email" id="email"/>
             </div>

                <div className="form-group">
             <label className="form-label" htmlFor="password"> Password</label>
             <input className="form-input" type="passwords" is="password"/>
             </div>

             <button type="submit" className="btn btn-primary btn-large"> Sign Up</button>
           </form>

           <div className="auth-switch">
             <p>
                Already have an account <span className="auth-link"> Login</span>
             </p>
           </div>
            </div>

        </div>
    </div>
    )
}
