export default function Reducer(state, action) {
  switch (action.type) {
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    case "ADD_EMPLOYEES":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case "EDIT_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee.id === action.payload.id) {
            return action.payload;
          }
          return employee;
        }),
      };
    case "TOOGLE_EMPLOYEE_STATUS":
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee.id === action.payload.id) {
            employee.isActive = !action.payload.status;
            return employee;
          }
          return employee;
        }),
      };
    default:
      return state;
  }
}
