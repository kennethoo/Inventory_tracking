import { IoEllipsisVertical } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import React,{Component} from "react";
import axios from "axios"
import { MdModeEditOutline } from "react-icons/md";
class Option extends Component{
    container = React.createRef();
    constructor(props) {
        super(props);
        this.state={
        open:true
        }
    }


    deleteIventory=()=>{
        let inventory={
            id:this.props.id
        }
        console.log(inventory)
        axios.post("http://localhost:4000/removeWarehouse",inventory).then((result)=>{
            this.props.getInventory()
        }).catch((err)=>{
            alert("Something went wrong ")
        })
    }
    handleClickOutside=(event)=>{
        if (this.container.current &&!this.container.current.contains(event.target)) {
            this.props.setOpen(false)
          }else{
          }
    }

    updateInventory=()=>{
this.props.editInventory(this.props.id)
this.props.setOpen(false)
    }
    componentDidMount=()=>{
    document.addEventListener("mousedown", this.handleClickOutside);
} 
    componentWillUnmount=()=>{
        document.removeEventListener("mousedown", this.handleClickOutside);
      }

    render(){
  return(
    <div   className={`boxmrjrjerjrjnue top`} ref={this.container}>
    <div className="title-of--thise-action">    
        <button  onClick={()=>{this.props.setOpen(true)}}   className="close-that bb"><IoEllipsisVertical/></button>
  </div>
      <div className={`tisjjrjrjr ${this.props.open===true?"active":""}`}>
           <div   className="box-that-hold-the-setting">
                <div className="hold-thatiocom">
             <MdDelete/>
                </div>
                <button onClick={this.deleteIventory}  className="edit-the-program">Delete</button>
                </div>
      
             
              </div>
                   </div>
  )
    }

}

export default Option