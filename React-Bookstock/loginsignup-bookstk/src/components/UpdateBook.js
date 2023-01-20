import React, {useState,useContext}from "react"
import axios from "axios"
// import DataContext from "../context/DataContext";

export default function UpdateBook(){
    let [bookData, setBookData] = useState([])
    // let ctx = useContext(DataContext);
    let bkid = 0;
    const handleSelectChange = (e) => {
      let idx = e.target.selectedIndex
      bkid = e.target.options[idx].value;
      console.log("bkid",bkid)      
      console.log("e.target.selectedIndex",e.target.selectedIndex)       
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
        let updateUrl = "http://127.0.01:3001/bookstock/"
        updateUrl +=bkid
        console.log("updateUrl",updateUrl)
        let res = await axios.put(updateUrl)
        console.log(res.data)
      }
    return(
        <div>
        <h3>Edit Books:</h3>
        <select className="form-control" name="bookUpdate" value={bookData.id} onChange={handleSelectChange}  >  
        <option>Select Book</option>  
        {bookData.length && bookData.map((e, key) => {  
        return <option key={key} value={e.id}>{e.bookname}</option>;  
        })}   
        </select>
        <label for="bkname" id="bookname">Book-Name </label>
        <input type="text" id="bknameUp" placeholder="bookname" name="bookname-update" onChange={handleUpChange} /> <br></br>
        <label for="bknameUp" id="booknameUp">Book-Author </label>
        <input type="text" id="bkauthorUp" placeholder="bookauthor" name="bookauthor-update" onChange={handleUpChange} /><br></br>
        <label for="bkauthorUp" id="bookAuthorUp">Book-Quantity</label>
        <input type="text" id="bkqntyUp" placeholder="bookquantity" name="bookquantity-update" onChange={handleUpChange} /> <br></br>
        <label for="bkqntyUp" id="bookqntyUp"> Book-Name </label>
        <button name="update" onClick={sendUpdateData}>Edit </button>
      </div>
      
    
    )
    }