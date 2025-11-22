import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DettagliProdotto() {
  const { id } = useParams();
  const [dettagliProdotto, setDettagliProdotto] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => setDettagliProdotto(resp.data));
  }, []);

  return (
    <>
      {dettagliProdotto && (
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
              <h2 className="text-success mb-4">€ {dettagliProdotto.price}</h2>

              {/* Descrizione */}
              <p className="text-muted mb-4">{dettagliProdotto.description}</p>

              {/* Azioni */}
              {/* <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg">
                  Aggiungi al carrello
                </button>
                <button className="btn btn-outline-secondary btn-lg">
                  Aggiungi ai preferiti
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DettagliProdotto;
