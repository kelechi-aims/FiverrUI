import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import "./Login.scss";
// import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle login logic here
        try {
            const res = await newRequest.post('/auth/login',{ username, password });
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            navigate('/');
            
        } catch (err) {
            setError(err.response.data);
        }
    };
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="johndoe" 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* <div className="forget">
                    <label>
                    <input 
                        type="checkbox" 
                        checked="checked" 
                        name="remember"
                    /> Remember me
                    </label>
                    <span className="psw">Forgot <Link className='link forgot' to='#'>password?</Link></span>
                </div> */}
                <button type="submit">Login</button>
                {error && error}
            </form>
        </div>
    )
}

export default Login;