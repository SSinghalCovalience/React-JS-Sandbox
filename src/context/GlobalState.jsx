import { createContext, useReducer } from "react";
import AppReducer from "./appReducer";

const initialState = {
  employees: [
    {
      id: 1,
      name: "Sukant Singhal",
      designation: "Application Engineer - 3",
      location: "Chandigarh",
      email: "ssinghal@covalience.com",
      phone: "+918302327706",
      isActive: true,
    },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id,
    });
  }

  function addEmployee(employees) {
    dispatch({
      type: "ADD_EMPLOYEES",
      payload: employees,
    });
  }

  function editEmployee(employees) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employees,
    });
  }

  function toogleEmployeeStatus(data) {
    dispatch({
      type: "TOOGLE_EMPLOYEE_STATUS",
      payload: data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        removeEmployee,
        addEmployee,
        editEmployee,
        toogleEmployeeStatus,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
