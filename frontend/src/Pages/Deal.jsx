import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { getOEM, postOEM } from "../Redux/OEM/actionCreater";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TableRow from "./../Components/TableRow";

const Deals = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [new_model, setNewModel] = useState({
    vehicle_oem_name: "",
    vehicle_model_name: "",
    year_of_launch: "",
    vehicle_ex_showroom_price: "",
    vehicle_available_colors: "",
    vehicle_mileage: "",
    vehicle_power: "",
    vehicle_max_speed: "",
    image: ""
  });
  // const isTableFullWidth = useBreakpointValue({ base: true, md: false });
  const { token } = useSelector((store) => store.auth);
  const { oem_specs } = useSelector((store) => store.oem);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [searchTerm, lastExecutedTime] = useDebounce(search, 200);
  useEffect(() => {
    dispatch(getOEM(token, page));
    console.log(oem_specs);
  }, [page]);

  const handlePageNext = (page) => {
    setPage((page) => page + 1);
  };

  const handlePagePrev = (page) => {
    setPage((page) => page - 1);
  };

  const handleSearch = () => {
    dispatch(getOEM(token, page, search));
  };
  const handleAddModelClick = () => {
    setIsModalOpen(true);
  };

  const handleChangeModalInput = (e) => {
    let { name, value } = e.target;

    if (
      name === "vehicle_ex_showroom_price" ||
      name === "vehicle_mileage" ||
      name === "vehicle_power" ||
      name === "vehicle_max_speed" ||
      name === "odomoter_reading" ||
      name === " major_scrates" ||
      name === "vehicle_previous_accidents" ||
      name === "number_of_previous_buyers" ||
      name === "vehicle_dealer_price"
    ) {
      value = Number(value);
    }

    setNewModel((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleAddNewModelToDb = () => {
    console.log(new_model);
    dispatch(postOEM(token, new_model));
    toast.success({
      title: `New OEM Model Added successfully`,
      position: "top",
      isClosable: true,
      colorScheme: "whatsapp"
    });
    dispatch(getOEM(token, page));
  };
  

  return (
    <>
      <div className="w-full overflow-x-auto text-center">
        <div className="flex justify-between">
          <button onClick={handlePagePrev} className="btn">Previous</button>
          <input
            name="search"
            placeholder="search model/Manufacturer/Year"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input"
          />
          <button onClick={handleSearch} className="btn">Search</button>
          <button onClick={handlePageNext} className="btn">Next</button>
        </div>
        <button
          onClick={handleAddModelClick}
          className="text-orange-300 hover:bg-orange-200 hover:text-black cursor-pointer underline"
        >
          Not finding the model of your choice? Click here to add new OEM model and specs
        </button>
        <br />
        <p className="text-orange-300">
          * Click on "Select Model" to select a preexisting model with OEM specs and customize it to add to inventory
        </p>
        <table className="table_tiny">
          <caption className="text-sm">OEM SPECIFICATIONS</caption>
          <thead>
            <tr>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>
                Year <br /> of Launch
              </th>
              <th>
                Ex-showroom <br /> price
              </th>
              <th>Colors</th>
              <th>Mileage</th>
              <th>
                Max Speed <br /> (km/h)
              </th>
              <th>
                Power <br /> (BHP)
              </th>
              <th>Image</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {oem_specs?.map((el) => {
              return <TableRow el={el} key={el._id} />;
            })}
          </tbody>
        </table>
        <button className="btn" isActive={false} style={{ cursor: 'default' }}>
          Page : {page}/9
        </button>
      </div>
      <div className={isModalOpen ? 'block' : 'hidden'}>
        <div className="modal">
          <div className="modal-content">
            <h2 className="modal-header">Add New OEM Model and Specs</h2>
            <div className="modal-body">
              <input
                placeholder="vehicle oem name(Manufacturer)"
                name="vehicle_oem_name"
                value={new_model.vehicle_oem_name}
                onChange={(e) => handleChangeModalInput(e)}
                className="input"
              />
              <input
                placeholder="vehicle_model_name"
                name="vehicle_model_name"
                value={new_model.vehicle_model_name}
                onChange={(e) => handleChangeModalInput(e)}
                className="input"
              />
              <input
                placeholder="year_of_launch"
                name="year_of_launch"
                value={new_model.year_of_launch}
                onChange={(e) => handleChangeModalInput(e)}
                className="input"
              />
              <input
                placeholder="vehicle_ex_showroom_price"
                name="vehicle_ex_showroom_price"
                value={new_model.vehicle_ex_showroom_price}
                onChange={(e) => handleChangeModalInput(e)}
                className="input"
              />
              <input
                placeholder="vehicle_available_colors"
                name="vehicle_available_colors"
                value={new_model.vehicle_available_colors}
                onChange={(e) => handleChangeModalInput(e)}
                className="input"
              />
              <input
                placeholder="vehicle_mileage"
                name="vehicle_mileage"
                value={new_model.vehicle_mileage}
                onChange={(e) => handleChangeModalInput(e)}
                className="input"
              />
              <input
                placeholder="vehicle_power"
                name="vehicle_power"
                value={new_model.vehicle_power}
                onChange={(e) => handleChangeModalInput(e)}
                className="input"
              />
              <input
                placeholder="vehicle_max_speed"
                name="vehicle_max_speed"
                value={new_model.vehicle_max_speed}
                onChange={(e) => handleChangeModalInput(e)}
                className="input"
              />
              <input
                placeholder="image"
                name="image"
                value={new_model.image}
                onChange={(e) => handleChangeModalInput(e)}
                className="input"
              />
            </div>
            <div className="modal-footer">
              <button  className="btn">Close</button>
              <button
                onClick={handleAddNewModelToDb}
                className="btn"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default Deals;
