import { Fragment, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import AntSwitch from "./AntSwitch";
import CommonDropDown from "./CommonDropDown";

export default function AddEmployee() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isActive, setIsChecked] = useState(false);
  const { addEmployee, employees } = useContext(GlobalContext);
  const navigate = useNavigate();

  // Function to handle the switch state change
  const handleSwitchChange = () => {
    setIsChecked(!isActive); // Toggle the current state
  };

  const handleChange = (event) => {
    setDesignation(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: employees.length + 1,
      name,
      location,
      designation,
      email,
      phone,
      isActive,
    };
    addEmployee(newEmployee);
    navigate("/");
  };

  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of employee
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Enter location"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="designation"
            >
              Designation
            </label>

            <CommonDropDown
              value={designation}
              label="Designation"
              handleChange={handleChange}
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter Email"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Enter Phone"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <AntSwitch isChecked={isActive} handleSwitch={handleSwitchChange} />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Employee
            </button>
          </div>

          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
