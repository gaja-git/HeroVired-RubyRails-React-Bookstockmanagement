import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import "./bookstock.css"

import { Link } from "react-router-dom";
// import DataContext from "../context/DataContext";

export default function Bookstock() {
  let [bookData, setBookData] = useState([])

  //let [inputValue, setinputValue] = useState("")

  // let ctx = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get("http://127.0.01:3001/bookstock")
      console.log("res", res.data)
      setBookData(res.data)
    }
    fetchData()
  }, [])

  //Add book
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

  //update book
  let bkupid = 0;
  const handleSelectChange = (e) => {
    let idx = e.target.selectedIndex
    bkupid = e.target.options[idx].value;
    console.log("bbkupid", bkupid)
    console.log("e.target.selectedIndex", e.target.selectedIndex)
  }
  let [upData, setUpData] = useState({})
  const handleUpChange = (e) => {
    setUpData({
      ...upData,
      [e.target.name]: e.target.value,
    })
    console.log(upData)
  }

  const sendUpdateData = async () => {
    console.log("bkupid", bkupid)
    let updateUrl = "http://127.0.01:3001/bookstock/"
    updateUrl += bkupid
    console.log("updateUrl", updateUrl)
    let res = await axios.put(updateUrl)
    console.log(res.data)
  }

  let bkid = 0;
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
      <div>
        <h3>Books Available in book stock:</h3>
        <table>
          <tr>
            <td>Book-Id</td><td>Book-Name</td> <td>Book-Author</td> <td>Book-Quantity</td></tr>{bookData.length ? (
              bookData.map((ele) => (
                <tr>
                  <td>{ele.id}</td> <td>{ele.bookname}</td> <td>{ele.bookauthor}</td><td>{ele.bookquantity}</td>
                </tr>
              ))
            ) : (
              <div> No data</div>
            )}
        </table>
      </div>
      <Link to="/addbook">
        <button>Click to add book</button>
      </Link>
      <Link to="/updatebook">
        <button>Click to update book</button>
      </Link>
      <Link to="/deletebook">
        <button>Click to delete book</button>
      </Link>
      {/* <div>
        <h3> Add New Books :</h3>
        
        <label for="bkname" id="bookname">Book-Name</label>
        <input type="text" id="bkname" placeholder="bookname" name="bookname" onChange={handleChange} /> <br></br>
        <label for="bkname" id="bookname">Book-Author</label>
        <input type="text" placeholder="bookauthor" name="bookauthor" onChange={handleChange} /><br></br>
        <label for="bkname" id="bookname">Book-Quantity</label>
        <input type="text" placeholder="bookquantity" name="bookquantity" onChange={handleChange} /><br></br>
        
        <button name="add" onClick={sendAddData}>Add</button>
      </div> */}
      {/* <div>
        <h3>Edit Books:</h3>
        <select className="form-control" name="bookSelUp" value={bookData.id} onChange={handleSelectChange}  >  
        <option>Select Book</option>  
        {bookData.length && bookData.map((e, key) => {  
        return <option key={key} value={e.id}>{e.bookname}</option>;  
        })}   
        </select> <br></br>
        <label for="bknameUp" id="booknameUp">Book-Name </label>
        <input type="text" id="bknameUp" placeholder="bookname" name="bookname-update" onChange={handleUpChange} /> <br></br>
        <label for="bkauthorUp" id="bookAuthorUp">Book-Author </label>
        <input type="text" id="bkauthorUp" placeholder="bookauthor" name="bookauthor-update" onChange={handleUpChange} /><br></br>
        <label for="bkauthorUp" id="bookAuthorUp">Book-Quantity</label>
        <input type="text" id="bkqntyUp" placeholder="bookquantity" name="bookquantity-update" onChange={handleUpChange} /> <br></br>
        
        <button name="update" onClick={sendUpdateData}>Edit </button>
      </div> */}
      {/* <div> 
        <h3>Delete Book:</h3>
        
        <select className="form-control" name="bookDel" value={bookData.id} onChange={handleDelChange}  >  
        <option>Select Book</option>  
        {bookData.map((e, key) => {  
        return <option key={key} value={e.id}>{e.bookname}</option>;  
        })}   
        </select>
        <button name="delete" onClick={sendDeleteData}>Delete </button>
      </div> */}


    </div>
  )
}
