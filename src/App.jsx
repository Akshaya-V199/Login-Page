import './App.css'
import { useState } from 'react'

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    console.log("Email:", email)
    console.log("Password:", password)
  }

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="left-section">

        <img
          className="logo"
          src="/images/myapp-logo.png"
          alt="MyApp"
        />

        <div className="welcome-text">
          <h1>
            Welcome <span>Back!</span>
          </h1>

          <p>
            Login to continue your journey<br />
            with us.
          </p>
        </div>

        <img
          className="main-illustration"
          src="/images/login-illustration.png"
          alt="Person using laptop"
        />

      </div>


      {/* RIGHT SIDE */}
      <div className="right-section">

       

        <div className="login-container">

          <h2>Login</h2>

          <p className="subtitle">
            Enter your credentials to access your account
          </p>


          {/* EMAIL */}
          <div className="form-group">

            <label>Email :</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>


          {/* PASSWORD */}
          <div className="form-group">

            <label>Password :</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>


          <button
            className="login-button"
            onClick={handleLogin}
          >
            Login →
          </button>


          <div className="divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>


          <p className="signup">
            Don't have an account?
            <a href="#"> Sign up</a>
          </p>

        </div>

        <img
          className="bottom-decoration"
          src="/images/bottom-decoration.png"
          alt=""
        />

      </div>

    </div>
  )
}

export default App