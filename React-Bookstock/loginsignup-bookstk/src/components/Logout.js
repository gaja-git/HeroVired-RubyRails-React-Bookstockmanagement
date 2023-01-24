import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";


export default function Logout() {
    let [ldata, setLData] = useState({})
    const navigate = useNavigate();
    const handleChange = (e) => {
        setLData({
            ...ldata,
            [e.target.name]: e.target.value,
        })
    }

    const sendLoginData = async () => {
        let res = await axios.get("http://127.0.0.1:3001/logout")
        console.log(res.data)
        if (res.data)
            navigate("/login")
    }

    return (
        <div>
            <h3>Login</h3>
            <ul>
                <li>
                    <label> User Email: </label>
                    <input type="text" placeholder="useremail" name="useremail" onChange={handleChange} />
                </li>
                <li>
                    <label> Password: </label>
                    <input type="password" placeholder="password" name="password" onChange={handleChange} />
                </li>
            </ul>
            <input type="submit" placeholder="Login" onClick={sendLoginData} />
        </div>
    )
}