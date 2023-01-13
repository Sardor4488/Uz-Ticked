import Footer from "./uz-iticket/components/footer";
import Header from "./uz-iticket/components/header";
import Home from "./uz-iticket/pages/home";
import Hotels from "./uz-iticket/pages/hotels";
import Restuarants from "./uz-iticket/pages/restuarants/index";
import Transport from "./uz-iticket/pages/transport";
import Travel from "./uz-iticket/pages/travel";
import WorkTravel from "./uz-iticket/pages/work-travel";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/restuarants" element={<Restuarants />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/choos-train" element={<WorkTravel />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/work-travel" element={<WorkTravel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
