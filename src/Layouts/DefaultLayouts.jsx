import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function DefaultLayout() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default DefaultLayout;
