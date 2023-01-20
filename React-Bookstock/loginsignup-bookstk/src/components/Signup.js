import React from "react"
import Axios from "axios"

export default function Signup() {
  let [data, setData] = useState({})

  const handleChange = () => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
    console.log(data)
  }

  const sendData = async () => {
    let res = await Axios.post("/useracc", data)
    console.log(res.data)
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
