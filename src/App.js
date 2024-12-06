import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyMeteoCorrente from "./components/MyMeteoCorrente";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MyDetails from "./components/MyDetails";
import MyError from "./components/MyError";
import MyFooter from "./components/MyFooter";

function App() {
  const [Search, setSearch] = useState("Roma");

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <MyNavbar SearchProp={Search} setSearchProp={setSearch} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MyMeteoCorrente city={Search} />} />
            <Route path="Details" element={<MyDetails city={Search} />} />
            <Route path="*" element={<MyError />} />
          </Routes>
        </main>
        <footer className="bg-dark text-light fixed-bottom">
          <MyFooter/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
