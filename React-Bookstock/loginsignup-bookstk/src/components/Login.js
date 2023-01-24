import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function Login() {
  let [ldata, setLData] = useState({})
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLData({
      ...ldata,
      [e.target.name]: e.target.value,
    })
  }

  const sendLoginData = async () => {
    let res = await axios.post("http://127.0.0.1:3001/login", ldata)
    console.log(res.data)
    if ("res.data", res.data)
      navigate("/bookstock")
    else
      navigate("/signup")
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
