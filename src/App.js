import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";
import SuccessPage from "./Components/SuccessPage";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/>} />
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
