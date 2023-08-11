import { Heading } from "./Heading";
import { EmployeeList } from "./EmployeeList";
import { Fragment } from "react";

export default function HocLanding(props) {
  return (
    <div className="App">
      <div className="card">
        <Fragment>
          <div className="container mx-auto">
            <h3 className="text-center  text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
              CRUD with React Context API and Hooks
            </h3>
            <Heading />
            <EmployeeList />
          </div>
        </Fragment>
      </div>
      {props.children}
    </div>
  );
}
