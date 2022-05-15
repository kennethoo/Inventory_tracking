import {useState} from "react"
import { useEffect } from "react"
import { IoCloseSharp } from "react-icons/io5";
const axios = require("axios")
function Edit({openInventory,getInventory,curentProduct}){
    const [productName,setProductName]=useState("")
    const [categoty,setCategoty]=useState("")
    const [ventor,setVentor]=useState("")
    const [price,setPrice]=useState(0)
function addName(e){
    setProductName(e.target.value) 
}
function addVentor(e){
    setVentor(e.target.value) 
}
function addCategorie(e){
    setCategoty(e.target.value) 
}
function addPrice(e){
    setPrice(e.target.value) 
}
function updateEdit(){
    let inventory={
        productName:productName,
        ventor:ventor,
        category:categoty,
        price:price,
        id:curentProduct._id
    }
    axios.post("http://localhost:4000/updateinventory",inventory).then((result)=>{
        getInventory()
        openInventory(false)
    })

}
function loadInventory(){

setProductName(curentProduct.productName) 
setVentor(curentProduct.ventor) 
setCategoty(curentProduct.category) 
setPrice(curentProduct.price) 
}

useEffect(() => {
    loadInventory()
  }, [])

    return (
        <div className="add-iventory">
        <div className="form-wraper">
        <div className="box-wrapet-title">
      <p> Edit Inventory</p>
      <button  onClick={()=>{openInventory(false)}}   className="close-that"><IoCloseSharp/></button>
        </div>
        <div className="edit-box-profile">
				<p>Product Name</p>
     <input placeholder={"Product Name"} onChange={addName}  value={productName}  className="fullname-profile" type="text"  />
				</div>
              
                <div className="edit-box-profile">
				<p>Category</p>
				
     <input  placeholder="Clothing" onChange={addCategorie}  value={categoty} className="fullname-profile" type="text" name="category" />
				 
				</div>
               
                <div className="edit-box-profile">
				<p>Ventor</p>
        <input  placeholder="Shopify" onChange={addVentor}  value={ventor} className="fullname-profile" type="text" name="ventor" />
				</div>
                <div className="edit-box-profile">
				<p>Price</p>
        <input  placeholder="100" onChange={addPrice}  value={price} className="fullname-profile" type="number" name="price" />
				</div>
                <button onClick={updateEdit} className="add-program">Update</button>
        </div>
	
        </div>
    )
}
export default Edit