import Home from "./pages/Home";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import SingleProduct from "./components/SingleProduct";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}></Route>

          <Route path="/:id" element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
