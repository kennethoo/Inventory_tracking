import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import SelectWarehouse from "./selectwarehouse";
const moment = require("moment");

const axios = require("axios");
function AddIntentory({ openInventory, getInventory }) {
  const [productName, setProductName] = useState("");
  const [categoty, setCategoty] = useState("");
  const [ventor, setVentor] = useState("");
  const [warehouse, setWarehouse] = useState("6281520a38a029b7297ae878");
  const [price, setPrice] = useState(0);
  function addName(e) {
    setProductName(e.target.value);
  }
  function addVentor(e) {
    setVentor(e.target.value);
  }
  function addCategorie(e) {
    setCategoty(e.target.value);
  }
  function addPrice(e) {
    setPrice(e.target.value);
  }
  function addItem() {
    let inventory = {
      productName: productName,
      ventor: ventor,
      warehouseId: warehouse,
      category: categoty,
      price: price,
      date: moment().format(),
    };
    console.log(inventory);
    axios
      .post("http://localhost:4000/newinventoty", inventory)
      .then((result) => {
        getInventory();
        openInventory();
      });
  }
  return (
    <div className="add-iventory">
      <div className="form-wraper">
        <div className="box-wrapet-title">
          <p> Add Inventory</p>
          <button
            onClick={() => {
              openInventory();
            }}
            className="close-that"
          >
            <IoCloseSharp />
          </button>
        </div>
        <div className="edit-box-profile">
          <p>Product Name</p>
          <input
            placeholder={"Iphone"}
            onChange={addName}
            value={productName}
            className="fullname-profile"
            type="text"
          />
        </div>

        <div className="edit-box-profile">
          <p>Category</p>

          <input
            placeholder="Clothing"
            onChange={addCategorie}
            value={categoty}
            className="fullname-profile"
            type="text"
            name="category"
          />
        </div>
        <SelectWarehouse
          getInventory={getInventory}
          setWarehouse={setWarehouse}
          warehouse={warehouse}
        />
        <div className="edit-box-profile">
          <p>Ventor</p>
          <input
            placeholder="Shopify"
            onChange={addVentor}
            value={ventor}
            className="fullname-profile"
            type="text"
            name="ventor"
          />
        </div>
        <div className="edit-box-profile">
          <p>Price</p>
          <input
            placeholder="100"
            onChange={addPrice}
            value={price}
            className="fullname-profile"
            type="number"
            name="price"
          />
        </div>

        <button onClick={addItem} className="add-program">
          Add Item
        </button>
      </div>
    </div>
  );
}
export default AddIntentory;
