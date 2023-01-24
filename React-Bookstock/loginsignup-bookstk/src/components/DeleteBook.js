import React, { useState, useEffect } from "react"
import axios from "axios"
//import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

export default function DeleteBook() {
  let [bookData, setBookData] = useState([])
  //let ctx = useContext(DataContext);
  let bkid = 0;

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get("http://127.0.01:3001/bookstock")
      console.log("res", res.data)
      setBookData(res.data)
    }
    fetchData()
  }, [])

  const handleDelChange = (e) => {
    let idx = e.target.selectedIndex
    bkid = e.target.options[idx].value;
    console.log("bkid", bkid)
    console.log("e.target.selectedIndex", e.target.selectedIndex)


  }
  const sendDeleteData = async () => {
    //console.log("delData",delData)
    let delUrl = "http://127.0.01:3001/bookstock/"
    delUrl += bkid
    console.log("delUrl", delUrl)
    let res = await axios.delete(delUrl)
    console.log(res.data)
  }
  return (
    <div>
      <h3>Delete Book:</h3>
      <div>
        <select className="form-control" name="bookDel" value={bookData.id} onChange={handleDelChange}  >
          <option>Select Book</option>
          {bookData.length && bookData.map((e, key) => {
            return <option key={key} value={e.id}>{e.bookname}</option>;
          })}
        </select>
        <button name="delete" onClick={sendDeleteData}>Delete </button>
      </div>
      <Link to="/bookstock">
        <button>Back to Book stock</button>
      </Link>
    </div>
  )
}