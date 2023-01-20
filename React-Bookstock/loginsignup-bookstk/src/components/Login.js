import React from "react"

export default function Login() {
  let [ldata, setLData] = useState({})

  const handleChange = (e) => {
    setLData({
      ...ldata,
      [e.target.name]: e.target.value,
    })
  }

  const sendLoginData = async () => {
    let res = await Axios.post("http://127.0.0.1:3001/login", ldata)
    console.log(res.data)
  }

  return (
    <div>
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
