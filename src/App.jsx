import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import BookDetails from "./pages/BookDetails/BookDetails";
import Reader from "./pages/Reader/Reader";
import Upload from "./pages/Upload/Upload";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <section className="app__wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/books/:id/reader" element={<Reader />} />
          <Route path="/books/upload" element={<Upload />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
