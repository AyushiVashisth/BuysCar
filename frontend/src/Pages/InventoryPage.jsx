import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  getDataFilter,
  getDataSort
} from "../Redux/Inventory/actionCreater";
import InventoryRow from "../Components/Inventory_Card";

const Inventory = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { token } = useSelector((store) => store.auth);
  const { inventory_specs } = useSelector((store) => store.inventory);
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [sort, setSort] = useState("");
  const [trig, setTrig] = useState(false);
  const [sortByRecent, setSortByRecent] = useState(false);

  useEffect(() => {
    dispatch(getData(token, page, search, color, mileage, price, sort));
  }, [page, trig]);

  const handlePageNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePagePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleSearch = () => {
    dispatch(getData(token, page, search));
  };

  const handleFilterPrice = (e) => {
    dispatch(getDataFilter(token, "price", e.target.value));
  };

  const handleFilterMileage = (e) => {
    setTrig((prev) => !prev);
    dispatch(getDataFilter(token, "mileage", e.target.value));
  };

  const handleFilterColor = (e) => {
    dispatch(getDataFilter(token, "color", e.target.value));
    setTrig((prev) => !prev);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    dispatch(getDataSort(token, e.target.value));
  };

  const handleCheckboxChange = (event) => {
    inventory_specs.data.sort((a, b) => {
      if (sortByRecent) {
        return a.date_posted - b.date_posted;
      } else {
        return b.date_posted - a.date_posted;
      }
    });

    setSortByRecent(event.target.checked);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center space-x-4 mb-4">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={handlePagePrev}
          disabled={page === 1}
        >
          Prev
        </button>
        <div className="space-x-2">
          <select
            placeholder="Filter By Mileage"
            className="border rounded py-1 px-2"
            onChange={(e) => handleFilterMileage(e)}
          >
            <option value="5">greater than or equal to 5</option>
            <option value="10">greater than or equal to 10</option>
            <option value="15">greater than or equal to 15</option>
            <option value="20">greater than or equal to 20</option>
            <option value="25">greater than or equal to 25</option>
            <option value="30">greater than or equal to 30</option>
          </select>
          <select
            className="border rounded py-1 px-2"
            onChange={(e) => handleFilterPrice(e)}
          >
            <option value="10000">less than 10000</option>
            <option value="200000">less than 200000</option>
            <option value="350000">less than 350000</option>
            <option value="600000">less than 600000</option>
          </select>
          <select
            className="border rounded py-1 px-2"
            onChange={(e) => handleSort(e)}
          >
            <option value="desc">Low to High</option>
            <option value="asc">Hight to low</option>
          </select>
          <select
            className="border rounded py-1 px-2"
            onChange={(e) => handleFilterColor(e)}
          >
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded py-1 px-2"
          />
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={handlePageNext}
          >
            Next
          </button>
        </div>
      </div>
      <p className="text-xs">
        Number of cars in inventory: <b>{inventory_specs?.data?.length}</b>
      </p>
      <p className="text-xs text-orange-300">
        Kindly Edit/Delete your entries only: operation available on your deals
        else hidden
      </p>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={sortByRecent}
          onChange={handleCheckboxChange}
          className="form-checkbox h-4 w-4 text-blue-500 border-2 border-gray-500 rounded"
        />
        <p className="ml-2 font-bold">Sort by most recent</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {inventory_specs.data?.map((el) => (
          <InventoryRow el={el} key={el._id} setTrig={setTrig} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
