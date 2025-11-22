import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div
        className="container py-5 d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="text-center">
          <h1 className="display-1 fw-bold text-primary">404</h1>
          <h2 className="mb-3">Pagina non trovata</h2>
          <p className="text-muted mb-4">
            Oops! La pagina che stai cercando non esiste o è stata spostata.
          </p>

          <Link to={"/"} className="btn btn-primary btn-lg">
            Torna alla Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
