import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/upload" element={<UploadPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
