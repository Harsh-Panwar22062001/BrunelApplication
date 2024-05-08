import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";
import SuccessPage from "./Components/SuccessPage";
import Register from "./Components/RegisterPage/Register";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/success" element={<SuccessPage/>} />
       
      </Routes>
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppRouter;
