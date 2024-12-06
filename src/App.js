import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyMeteoCorrente from "./components/MyMeteoCorrente";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MyDetails from "./components/MyDetails";



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
            <Route 
            path="Details" 
            element={<MyDetails city={Search} />}/>
            
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
