import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/>} />
       
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
