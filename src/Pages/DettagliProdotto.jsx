import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DettagliProdotto() {
  const { id } = useParams();
  const [dettagliProdotto, setDettagliProdotto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => {
        // siccome in caso di id assente la risposta è nulla, inserito redirect forzato
        resp.data ? setDettagliProdotto(resp.data) : navigate("/prodotti");
      })
      .catch()
      .then(setIsLoading(false));
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div class="container d-flex align-items-center">
          <strong>Loading...</strong>
          <div
            class="spinner-border ml-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      ) : (
        dettagliProdotto && (
          <div className="container py-5">
            <div className="row g-5">
              {/* Immagine prodotto */}
              <div className="col-md-6 text-center">
                <img
                  src={dettagliProdotto.image}
                  alt={dettagliProdotto.title}
                  className="img-fluid rounded shadow-sm"
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                />
              </div>

              {/* Dettagli prodotto */}
              <div className="col-md-6">
                <span className="badge bg-secondary mb-3">
                  {dettagliProdotto.category}
                </span>

                <h1 className="fw-bold mb-3">{dettagliProdotto.title}</h1>

                {/* Rating */}
                <div className="d-flex align-items-center mb-3">
                  <div className="me-2 fs-5">
                    <span>Punteggio: </span>
                    <span className="text-muted">
                      {dettagliProdotto.rating.rate} (
                      {dettagliProdotto.rating.count} recensioni)
                    </span>
                  </div>
                </div>

                {/* Prezzo */}
                <h2 className="text-success mb-4">
                  € {dettagliProdotto.price}
                </h2>

                {/* Descrizione */}
                <p className="text-muted mb-4">
                  {dettagliProdotto.description}
                </p>
              </div>
            </div>
            {/* Navigazione tra prodotti */}
            <div className="text-center">
              <Link
                className="btn btn-secondary"
                to={`/prodotti/${parseInt(id) - 1}`}
              >
                Precedente
              </Link>
              <Link
                className="btn btn-primary"
                to={`/prodotti/${parseInt(id) + 1}`}
              >
                Successivo
              </Link>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default DettagliProdotto;
