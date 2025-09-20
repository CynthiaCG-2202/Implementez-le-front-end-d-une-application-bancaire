import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        {/* Les pages viendront s’afficher ici */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
