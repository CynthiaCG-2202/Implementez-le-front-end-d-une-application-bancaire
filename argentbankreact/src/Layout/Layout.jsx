import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


export default Layout;