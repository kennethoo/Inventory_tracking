
import {useState} from "react"
import {useEffect} from "react"
import axios  from "axios"
function WarehouseName({id}){
  const [name,setName]= useState("")

  function getName(){
    axios.get(`http://localhost:4000/warehouseName/${id}`).then((result)=>{
        setName(result.data.warehouseName) 
  })
  }

  useEffect(() => {
    getName()
  }, [])

    return(
        <div className="">{name}</div>  
    )
}
export default WarehouseName