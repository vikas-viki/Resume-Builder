import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetailsFilling from "./Pages/DetailsFilling";
import CheckSelectedId from "./Components/CheckSelectedId";
import AboutUs from "./Components/AboutUs";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route exact path="/" element={<Home />} />

        {/* Details Filling Page */}
        <Route
          exact
          path="/template/fill-details"
          element={
            <CheckSelectedId>
              <DetailsFilling />
            </CheckSelectedId>
          }
        />

        {/* Preview Page */}

        {/* About Us Page */}
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
