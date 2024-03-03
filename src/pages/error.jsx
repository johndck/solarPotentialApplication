import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>404 Error</h1>
      <p>Page not found</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Error;
