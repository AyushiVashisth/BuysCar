import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react"; // Remove Chakra UI components not used

import {
  deletehData,
  patchData,
  getData
} from "../Redux/Inventory/actionCreater";

const InventoryRow = ({ el, setTrig }) => {
  const toast = useToast();
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  let [same, setSame] = useState(false);

  const [editDetials, setEditDetails] = useState({
    ...el
  });
  const { token } = useSelector((state) => state.auth);
  let dealerId = "";
  useEffect(() => {
    dealerId = sessionStorage.getItem("dealerId") || null;
    if (dealerId === el.dealerId) {
      setSame(true);
    }
  }, []);

  const handleDelete = (id) => {
    dispatch(deletehData(token, id));
    toast({
      title: `Deleted successfully`,
      position: "top",
      isClosable: true,
      colorScheme: "whatsapp"
    });
    dispatch(getData(token, 1, "", "", "", "", ""));
    setTrig((prev) => !prev);
  };

  const handleEdit = (id) => {
    if (
      (editDetials.vehicle_oem_name === "" ||
        editDetials.odomoter_reading === "" ||
        editDetials.major_scrates === "" ||
        editDetials.vehicle_original_paint === "" ||
        editDetials.vehicle_previous_accidents === "" ||
        editDetials.number_of_previous_buyers === "" ||
        editDetials.vehicle_registration_location === "" ||
        editDetials.vehicle_current_location === "" ||
        editDetials.vehicle_dealer_price === "")
    ) {
      return toast({
        title: `Please fill all the required details/fields`,
        position: "top",
        isClosable: true,
        colorScheme: "red"
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

  el = { ...editDetials };

  return (
    <div className="border-2 shadow-md p-4 rounded-md w-full hover:scale-102 transition-transform duration-300">
      <div className="max-w-xs">
        <img src={el.image} className="rounded-lg mx-auto" alt={el.title} />
        <div className="mt-6 space-y-3">
          <h2 className="text-md">{el.title}</h2>
          <p className="text-gray-600">Dealer: {editDetials.dealer_full_name}</p>
          <p className="text-gray-600">Car Model: {editDetials.vehicle_model_name}</p>
          <p className="text-gray-600">Year of Launch: {editDetials.year_of_launch}</p>
          <p className="text-gray-600">Mileage: {editDetials.vehicle_mileage}</p>
          <p className="text-gray-600">Max Speed: {editDetials.vehicle_max_speed} km/h</p>
          <p className="text-gray-600">Odometer: {editDetials.odomoter_reading} Kms</p>
          <p className="text-gray-600">Original Paint: {editDetials.vehicle_original_paint}</p>
          <p className="text-gray-600">Major Scatches: {editDetials.major_scrates}</p>
          <p className="text-gray-600">Ex-showroom-price: Rs {editDetials.vehicle_ex_showroom_price}</p>
          <p className="text-gray-600">Previous Accidents: {editDetials.vehicle_previous_accidents}</p>
          <p className="text-gray-600">Registered at: {editDetials.vehicle_registration_location}</p>
          <p className="text-gray-600">Current Location: {editDetials.vehicle_current_location}</p>
          <p className="text-orange text-2xl">Price: Rs.{editDetials.vehicle_dealer_price}</p>
        </div>
        <hr className="mt-6 border" />
        <div className="mt-3 flex justify-between space-x-2">
          {edit ? (
            <button
              className={`button ${same ? 'bg-f28c00' : 'bg-gray-400'}`}
              onClick={(e) => setEdit((edit) => !edit)}
              disabled={!same}
            >
              Edit
            </button>
          ) : (
            <button
              className="button bg-gray-400"
              onClick={(e) => setEdit((edit) => !edit)}
              disabled={!same}
            >
              Cancel Edit
            </button>
          )}
          <button
            className={`button ${same ? 'bg-orange-300' : 'bg-gray-400'}`}
            disabled={!same}
          >
            Buy
          </button>
          {edit ? (
            <button
              className={`button delete ${same ? 'text-blackAlpha-500 border-blackAlpha-500' : 'bg-gray-400'}`}
              onClick={() => handleDelete(el._id)}
              disabled={!same}
            >
              Delete
            </button>
          ) : (
            <button
              className={`button save ${same ? 'text-blackAlpha-500 border-blackAlpha-500' : 'bg-gray-400'}`}
              onClick={() => handleEdit(el._id)}
              disabled={!same}
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
