const login = () => {
    return (
        <div className="register">
            <h1 reg-title>Login</h1>
            
            <div className="form-area">
            <form action="">
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button type="submit"className="login-btn">Login</button>
            </form>
            </div>
        </div>
    )
}

export default login;