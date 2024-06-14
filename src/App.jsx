import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route path="/videos/:videoId" element={<MainPage/>}></Route>
        </Route>
        <Route path="/upload" element={<UploadPage/>}></Route>
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
