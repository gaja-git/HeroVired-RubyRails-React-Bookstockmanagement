import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom"

export default function AddBook() {
  let [addData, setAddData] = useState({})
  const handleChange = (e) => {
    setAddData({
      ...addData,
      [e.target.name]: e.target.value,
    })
    console.log(addData)
  }
  const sendAddData = async () => {
    let res = await axios.post("http://127.0.01:3001/bookstock", addData)
    console.log(res.data)
  }

  return (
    <div>
      <h3> Add New Books  :</h3>

      <label for="bkname" id="bookname">Book-Name</label>
      <input type="text" id="bkname" placeholder="bookname" name="bookname" onChange={handleChange} /> <br></br>
      <label for="bkname" id="bookname">Book-Author</label>
      <input type="text" placeholder="bookauthor" name="bookauthor" onChange={handleChange} /><br></br>
      <label for="bkname" id="bookname">Book-Quantity</label>
      <input type="text" placeholder="bookquantity" name="bookquantity" onChange={handleChange} /><br></br>
      <label for="bkname" id="bookname">Book-Name </label>
      <button name="add" onClick={sendAddData}>Add</button>
      <Link to="/bookstock">
        <button>Back to Book stock</button>
      </Link>

    </div>
  )
}