import {useEffect} from "react"
import { AiFillSetting } from "react-icons/ai";
import Wharehousebox from "./wharehousebox"
import axios from "axios"
import {useState} from "react"
import AddWarehouse from "./addwarehouse"
function Shipemnt(){
    const [addBox,setAddBox] = useState(false)
    const[warehouses,setWarehouses]= useState([])

function getwarehouse(){
   axios.get(`http://localhost:4000/load-warehouse/${10}`).then((result)=>{
    setWarehouses(result.data)
  })
}
useEffect(() => {
    getwarehouse()
  }, [])
    return(
        <div className="inventoryBox">
        <div className="box-titler">
    <p className="rodu-namee">Warehouses</p>
  </div>
  <div className="wraper-container">
            <button  onClick={()=>{setAddBox(true)}} className="add-button">Add Warehouses</button>
            <div className="wraoer-div">
            <div className="div-box-wraorr title">
                    <div className="box-rrr">Date</div>
                    <div className="box-rrr">Warehouses Name</div>
                    <div className="box-rrr">Iventory size</div>
                    <div className="box-rr"><AiFillSetting/></div>
                </div>
                {warehouses.map((item)=>{
                    return (
                   <Wharehousebox getwarehouse={getwarehouse}  key={item._id} data={item}/>
                    )
                })}
               
               
            </div>
                
            </div>
            {addBox?<AddWarehouse getwarehouse={getwarehouse} setAddBox={setAddBox}/>:""}

  </div>
    )
}
export default Shipemnt