import "./style.css";
import { replace, useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let navigate = useNavigate();
  return (
    <div className="Error">
      <h1>{404}</h1> <p>THE PAGE YOU REQUESTED COULD NOT BE FOUND</p>
      <p>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/", { replace: true })}
        >
          Go back to Home
        </button>
      </p>
    </div>
  );
}
