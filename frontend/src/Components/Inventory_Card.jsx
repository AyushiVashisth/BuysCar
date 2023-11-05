import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletehData,
  patchData,
  getData
} from "../Redux/Inventory/actionCreater";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPencilAlt,
  FaSave,
  FaTrash,
  FaDollarSign,
  FaCar,
  FaClock,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaCheck,
  FaTimes,
  FaUser
} from "react-icons/fa";

const InventoryRow = ({ el, setTrig }) => {
  const [edit, setEdit] = useState(true);
  const [same, setSame] = useState(false);
  const dispatch = useDispatch();
  const [editDetials, setEditDetails] = useState({ ...el });
  const { token } = useSelector((state) => state.auth);
  let dealerId = "";

  useEffect(() => {
    dealerId = sessionStorage.getItem("dealerId") || null;
    if (dealerId === el.dealerId) {
      setSame(true);
    }
  }, []);

  function handleDelete(id) {
    dispatch(deletehData(token, id));
    toast({
      title: "Deleted successfully",
      position: "top",
      isClosable: true,
      colorScheme: "whatsapp" // Adjust this to your color scheme
    });
    dispatch(getData(token, 1, "", "", "", "", ""));
    setTrig((prev) => !prev);
  }

  const handleEdit = (id) => {
    if (
      editDetials.vehicle_oem_name === "" ||
      editDetials.odomoter_reading === "" ||
      editDetials.major_scrates === "" ||
      editDetials.vehicle_original_paint === "" ||
      editDetials.vehicle_previous_accidents === "" ||
      editDetials.number_of_previous_buyers === "" ||
      editDetials.vehicle_registration_location === "" ||
      editDetials.vehicle_current_location === "" ||
      editDetials.vehicle_dealer_price === ""
    ) {
      return toast({
        title: "Please fill all the required details/fields",
        position: "top",
        isClosable: true,
        colorScheme: "red" // Adjust this to your color scheme
      });
    }

    dispatch(patchData(token, id, editDetials));
    setEdit((prev) => !prev);
    dispatch(getData(token, 1, "", "", "", "", ""));
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (
      name === "vehicle_ex_showroom_price" ||
      name === "vehicle_mileage" ||
      name === "vehicle_power" ||
      name === "vehicle_max_speed" ||
      name === "odomoter_reading" ||
      name === "major_scrates" ||
      name === "vehicle_previous_accidents" ||
      name === "number_of_previous_buyers" ||
      name === "vehicle_dealer_price"
    ) {
      value = Number(value);
    }

    setEditDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <div
      className={`border p-4 shadow-md w-full ${
        same ? "bg-orange-100" : "bg-gray-100"
      } hover:scale-105 transition-transform duration-300`}
    >
      <img src={el.image} className="rounded-lg mx-auto mb-6" alt="Image" />
      <h2 className="text-lg font-semibold text-black"> {el.title} </h2>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-gray-700">
          <p>Dealer:</p>
          <p>Car Model:</p>
          <p>Year of Launch:</p>
          <p>Mileage:</p>
          <p>Max Speed:</p>
          <p>Odometer:</p>
          <p>Original Paint:</p>
          <p>Major Scratches:</p>
          <p>Ex-showroom price:</p>
          <p>Previous Accidents:</p>
          <p>Registered at:</p>
          <p>Current Location:</p>
          <p>Price:</p>
        </div>
        <div className="text-black">
          {edit ? (
            <p>{el.dealer_full_name}</p>
          ) : (
            <input
              type="text"
              name="dealer_full_name"
              value={editDetials.dealer_full_name}
              placeholder={el.dealer_full_name}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          {edit ? (
            <p>{el.vehicle_model_name}</p>
          ) : (
            <input
              type="text"
              value={editDetials.vehicle_model_name}
              name="vehicle_model_name"
              placeholder={el.vehicle_model_name}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          {edit ? (
            <p>{el.year_of_launch}</p>
          ) : (
            <input
              type="text"
              name="year_of_launch"
              value={editDetials.year_of_launch}
              placeholder={el.year_of_launch}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          {edit ? (
            <p>{el.vehicle_mileage}</p>
          ) : (
            <input
              type="text"
              name="vehicle_mileage"
              value={editDetials.vehicle_mileage}
              placeholder={el.vehicle_mileage}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          {edit ? (
            <p>{el.vehicle_max_speed} km/h</p>
          ) : (
            <input
              type="number"
              name="vehicle_max_speed"
              value={editDetials.vehicle_max_speed}
              placeholder={`${el.vehicle_max_speed} km/h`}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          {edit ? (
            <p>{el.odomoter_reading} Kms</p>
          ) : (
            <input
              type="number"
              name="odomoter_reading"
              value={editDetials.odomoter_reading}
              placeholder={`${el.odomoter_reading} Kms`}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          {edit ? (
            <p>{el.vehicle_original_paint}</p>
          ) : (
            <input
              type="text"
              name="vehicle_original_paint"
              value={editDetials.vehicle_original_paint}
              placeholder={el.vehicle_original_paint}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          {edit ? (
            <p>{el.major_scrates}</p>
          ) : (
            <input
              type="number"
              name="major_scrates"
              value={editDetials.major_scrates}
              placeholder={el.major_scrates}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          {edit ? (
            <p>Rs {el.vehicle_ex_showroom_price}</p>
          ) : (
            <input
              type="number"
              name="vehicle_ex_showroom_price"
              value={editDetials.vehicle_ex_showroom_price}
              placeholder={`Rs ${el.vehicle_ex_showroom_price}`}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          {edit ? (
            <p>{el.vehicle_previous_accidents}</p>
          ) : (
            <input
              type="number"
              name="vehicle_previous_accidents"
              value={editDetials.vehicle_previous_accidents}
              placeholder={el.vehicle_previous_accidents}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          {edit ? (
            <p>{el.vehicle_registration_location}</p>
          ) : (
            <input
              type="text"
              value={editDetials.vehicle_registration_location}
              name="vehicle_registration_location"
              placeholder={el.vehicle_registration_location}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          {edit ? (
            <p>{el.vehicle_current_location}</p>
          ) : (
            <input
              type="text"
              value={editDetials.vehicle_current_location}
              name="vehicle_current_location"
              placeholder={el.vehicle_current_location}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          {edit ? (
            <p>Rs.{el.vehicle_dealer_price}</p>
          ) : (
            <input
              type="number"
              value={editDetials.vehicle_dealer_price}
              name="vehicle_dealer_price"
              placeholder={`Rs. ${el.vehicle_dealer_price}`}
              onChange={(e) => handleInputChange(e)}
            />
          )}
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex space-x-4 justify-end">
          {edit ? (
            <button
              className={`${
                same ? "bg-orange-400" : "bg-gray-300"
              } hover:bg-orange-500 text-white px-3 py-1 rounded`}
              onClick={() => setEdit((edit) => !edit)}
            >
              Edit
            </button>
          ) : (
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              onClick={() => setEdit((edit) => !edit)}
            >
              Cancel Edit
            </button>
          )}
          <button className="bg-orange-300 hover:bg-orange-400 text-black px-3 py-1 rounded">
            Buy
          </button>
          {edit ? (
            <button
              className={`${
                same ? "bg-red-500 hover:bg-red-600" : "bg-gray-300"
              } text-white px-3 py-1 rounded`}
              disabled={!same}
              onClick={() => handleDelete(el._id)}
            >
              Delete
            </button>
          ) : (
            <button
              className={`${
                same ? "bg-green-500 hover:bg-green-600" : "bg-gray-300"
              } text-white px-3 py-1 rounded`}
              disabled={!same}
              onClick={() => handleEdit(el._id)}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryRow;
