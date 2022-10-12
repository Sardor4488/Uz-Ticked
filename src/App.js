import { Route, Routes } from "react-router-dom";
import Footer from "./uz-iticket/components/footer";
import Header from "./uz-iticket/components/header";
import Home from "./uz-iticket/pages/home";
import Hotels from "./uz-iticket/pages/hotels";
import Restuarants from "./uz-iticket/pages/restuarants/index";
import Transport from "./uz-iticket/pages/transport";
import Travel from "./uz-iticket/pages/travel";
import Work_travel from "./uz-iticket/pages/work-travel";



function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/restuarants' element={<Restuarants />} />
        <Route path='/transport' element={<Transport />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/work_travel' element={<Work_travel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
