import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div className="error">
        <h1>404 - Page Not Found</h1>
      </div>
      <Link to="/">Back To HomePage/Login</Link>
    </div>
  );
}

export default NotFound;
