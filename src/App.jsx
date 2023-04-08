import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";


function App() {
  const { state } = useContext(ContextGlobal);
  console.log(state.theme, "dark")
    

  return (
    <div className= {`${state.theme? "dark": " "}`}>
      <Routes>
        <Route element={<Navbar />}>
          <Route element={<Footer />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:dentistId" element={<Detail/>} />
            <Route path="/favs" element={<Favs />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
