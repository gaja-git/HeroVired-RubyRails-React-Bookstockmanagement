import React, { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Signup() {
  let [data, setData] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
    console.log(data)
  }

  const sendData = async () => {
    let res = await Axios.post("http://127.0.01:3001/useracc", data)
    console.log(res.data)
    if (res.data)
      navigate("/bookstock")

  }

  return (
    <div>
      <input type="text" placeholder="username" name="username" onChange={handleChange} />
      <input type="text" placeholder="email" name="useremail" onChange={handleChange} />
      <input type="text" placeholder="password" name="password_digest" onChange={handleChange} />
      <input type="submit" placeholder="Register" name="submit" onClick={sendData} />
    </div>
  )
}
