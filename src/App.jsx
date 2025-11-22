import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./Layouts/DefaultLayouts";
import Homepage from "./Pages/Homepage";
import ChiSiamo from "./Pages/ChiSiamo";
import Prodotti from "./Pages/Prodotti";
import NotFound from "./Pages/NotFound";
import DettagliProdotto from "./Pages/DettagliProdotto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path="/prodotti/:id" element={<DettagliProdotto />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
