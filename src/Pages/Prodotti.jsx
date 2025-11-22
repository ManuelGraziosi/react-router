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
      <div className="container">
        <h2>Prodotti</h2>
        {/* Elenco Prodotti */}
        <section>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
            {recivedProducts &&
              recivedProducts.map((curProduct) => (
                <div key={curProduct.id} className="col g-3">
                  <Link
                    to={`/prodotti/${curProduct.id}`}
                    className="card h-100"
                  >
                    <div className="card-header">
                      <h5>{curProduct.title}</h5>
                    </div>
                    <div className="card-body">
                      <img
                        src={curProduct.image}
                        alt={curProduct.title}
                        className="card-img"
                      />
                    </div>
                    <div className="card-footer">
                      <p>Prezzo: {curProduct.price}€</p>
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
