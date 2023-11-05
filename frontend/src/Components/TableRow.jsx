import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorSquares from "./SquareBoxes";
import { getData, postData } from "../Redux/Inventory/actionCreater";
import { useNavigate } from "react-router-dom";

const TableRow = ({ el }) => {
  const { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const [dealerDetails, setDealerDetails] = useState({
    vehicle_oem_name: el.vehicle_oem_name,
    vehicle_model_name: el.vehicle_model_name,
    year_of_launch: el.year_of_launch,
    vehicle_ex_showroom_price: el.vehicle_ex_showroom_price,
    vehicle_available_colors: el.vehicle_available_colors,
    vehicle_mileage: el.vehicle_mileage,
    vehicle_max_speed: el.vehicle_max_speed,
    vehicle_power: el.vehicle_power,
    image: el.image,
    odomoter_reading: "",
    major_scrates: "",
    vehicle_original_paint: "",
    vehicle_previous_accidents: "",
    number_of_previous_buyers: "",
    vehicle_registration_location: "",
    vehicle_current_location: "",
    vehicle_dealer_price: "",
    date_posted: Date.now(),
  });

  const navigate = useNavigate();

  const handleSelect = () => {
    setDrawerOpen(true);
  };

  const handleInput = (e) => {
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
    setDealerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
      vehicle_available_colors: ["Red", "Black"],
    }));
  };

  const handlePostData = async (e, dealerDetails, token) => {
    e.preventDefault();
    // Validation
    if (
      !dealerDetails.vehicle_oem_name ||
      dealerDetails.odomoter_reading === "" ||
      dealerDetails.major_scrates === "" ||
      dealerDetails.vehicle_original_paint === "" ||
      dealerDetails.vehicle_previous_accidents === "" ||
      dealerDetails.number_of_previous_buyers === "" ||
      dealerDetails.vehicle_registration_location === "" ||
      dealerDetails.vehicle_current_location === "" ||
      dealerDetails.vehicle_dealer_price === ""
    ) {
      return alert("Please fill all the required details/fields");
    }

    dispatch(postData(token, dealerDetails));
    dispatch(getData(token));
    setTimeout(() => {
      alert("Car added successfully to inventory, navigating to inventory");
      navigate("/inventory");
    }, 500);
  };

  return (
    <>
      <tr>
        <td>{el.vehicle_oem_name}</td>
        <td>{el.vehicle_model_name}</td>
        <td>{el.year_of_launch}</td>
        <td>{el.vehicle_ex_showroom_price}</td>
        <td>
          <ColorSquares
            colors={el.vehicle_available_colors}
            numberOfBoxes={el.vehicle_available_colors.length}
          />
        </td>
        <td>{el.vehicle_mileage}</td>
        <td>{el.vehicle_max_speed}</td>
        <td>{el.vehicle_power}</td>
        <td>
          <img src={el.image} alt={el.vehicle_model_name} />
        </td>
        <td>
          <div className="flex flex-col">
            <button
              onClick={handleSelect}
              className="bg-gray-200 text-blackAlpha-900 hover:bg-orange-300 hover:text-black w-80"
            >
              Select model
            </button>
          </div>
        </td>
      </tr>

      {isDrawerOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-screen-sm w-full">
            <h2 className="text-2xl font-sans font-semibold mb-2">
              Add Vehicle of this model to inventory
            </h2>

            <div className="space-y-4">
              <div>
                <label>Manufacturer</label>
                <input
                  type="text"
                  placeholder={el.vehicle_oem_name}
                  value={dealerDetails.vehicle_oem_name}
                  name="vehicle_oem_name"
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Model</label>
                <input
                  type="text"
                  placeholder={el.vehicle_model_name}
                  value={dealerDetails.vehicle_model_name}
                  name="vehicle_model_name"
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Year</label>
                <input
                  type="text"
                  placeholder={el.year_of_launch}
                  value={dealerDetails.year_of_launch}
                  name="year_of_launch"
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Ex Showroom Price</label>
                <input
                  type="text"
                  placeholder="Price"
                  value={dealerDetails.vehicle_ex_showroom_price}
                  name="vehicle_ex_showroom_price"
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Mileage</label>
                <input
                  type="text"
                  placeholder="Mileage"
                  name="vehicle_mileage"
                  value={dealerDetails.vehicle_mileage}
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Max Speed</label>
                <input
                  type="text"
                  placeholder="Max Speed"
                  name="vehicle_max_speed"
                  value={dealerDetails.vehicle_max_speed}
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Available Colors</label>
                <input
                  type="text"
                  placeholder="Available Colors"
                  name="vehicle_available_colors"
                  value={dealerDetails.vehicle_available_colors}
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Power</label>
                <input
                  type="text"
                  placeholder="Power"
                  name="vehicle_power"
                  value={dealerDetails.vehicle_power}
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Image</label>
                <input
                  type="text"
                  placeholder="Image"
                  value={dealerDetails.image}
                  className="input"
                />
              </div>
              <div>
                <label>Odometer Reading</label>
                <input
                  type="text"
                  placeholder="Odometer Reading"
                  name="odomoter_reading"
                  value={dealerDetails.odomoter_reading}
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Major Scratches</label>
                <input
                  type="text"
                  placeholder="Major Scratches"
                  name="major_scrates"
                  value={dealerDetails.major_scrates}
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Vehicle Original Paint</label>
                <input
                  type="text"
                  placeholder="Vehicle Original Paint"
                  name="vehicle_original_paint"
                  value={dealerDetails.vehicle_original_paint}
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Vehicle Previous Accidents</label>
                <input
                  type="text"
                  placeholder="Vehicle Previous Accidents"
                  name="vehicle_previous_accidents"
                  value={dealerDetails.vehicle_previous_accidents}
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Number of Previous Buyers</label>
                <input
                  type="text"
                  placeholder="Number of Previous Buyers"
                  name="number_of_previous_buyers"
                  value={dealerDetails.number_of_previous_buyers}
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Vehicle Registration Location</label>
                <input
                  type="text"
                  placeholder="Vehicle Registration Location"
                  name="vehicle_registration_location"
                  value={dealerDetails.vehicle_registration_location}
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Vehicle Current Location</label>
                <input
                  type="text"
                  placeholder="Vehicle Current Location"
                  name="vehicle_current_location"
                  value={dealerDetails.vehicle_current_location}
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
              <div>
                <label>Vehicle Dealer Price</label>
                <input
                  type="text"
                  placeholder="Vehicle Dealer Price"
                  name="vehicle_dealer_price"
                  value={dealerDetails.vehicle_dealer_price}
                  onChange={(e) => handleInput(e)}
                  className="input"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TableRow;
