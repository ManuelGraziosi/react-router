function ChiSiamo() {
  return (
    <>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Chi Siamo</h1>
          <p className="text-muted mt-3">
            Siamo un team di professionisti e questo progetto è una demo di un
            negozio online.
          </p>
        </div>

        <div className="row g-4">
          {/* Membro 1 */}
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <img
                src="https://via.placeholder.com/300x300"
                className="card-img-top"
                alt="Membro del team"
              />
              <div className="card-body">
                <h5 className="card-title">Nome Cognome</h5>
                <p className="card-text text-muted">Ruolo aziendale</p>
              </div>
            </div>
          </div>

          {/* Membro 2 */}
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <img
                src="https://via.placeholder.com/300x300"
                className="card-img-top"
                alt="Membro del team"
              />
              <div className="card-body">
                <h5 className="card-title">Nome Cognome</h5>
                <p className="card-text text-muted">Ruolo aziendale</p>
              </div>
            </div>
          </div>

          {/* Membro 3 */}
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <img
                src="https://via.placeholder.com/300x300"
                className="card-img-top"
                alt="Membro del team"
              />
              <div className="card-body">
                <h5 className="card-title">Nome Cognome</h5>
                <p className="card-text text-muted">Ruolo aziendale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChiSiamo;
