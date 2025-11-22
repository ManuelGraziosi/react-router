import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Prodotti() {
  const [recivedProducts, setRecivedProducts] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      console.log(resp.data);
      setRecivedProducts(resp.data);
    });
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="container py-5">
        <h2 className="mb-4 fw-bold">Prodotti</h2>
        {/* Elenco Prodotti */}
        <section>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {recivedProducts &&
              recivedProducts.map((curProduct) => (
                <div key={curProduct.id} className="col">
                  <Link
                    to={`/prodotti/${curProduct.id}`}
                    className="card h-100 text-decoration-none"
                  >
                    <div className="card-header bg-white border-0">
                      <h6 className="card-title text-dark text-truncate">
                        {curProduct.title}
                      </h6>
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-center">
                      {" "}
                      <img
                        src={curProduct.image}
                        alt={curProduct.title}
                        className="img-fluid"
                        style={{ maxHeight: "180px", objectFit: "contain" }}
                      />
                    </div>
                    <div className="card-footer bg-white border-0">
                      <p className="fw-bold text-success mb-0">
                        Prezzo: {curProduct.price}€
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Prodotti;
