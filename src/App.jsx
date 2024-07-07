import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import BookDetails from "./pages/BookDetails/BookDetails";
import Reader from "./pages/Reader/Reader";
import Upload from "./pages/Upload/Upload";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  async function checkIsLoggedIn() {
    const token = sessionStorage.getItem("token");

    if (!token) {
      setUser(null);
      return;
    }

    try {
      const { data } = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/users/me",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUser(data);
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  }

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <section className="app__wrapper">
        <Header user={user} check={checkIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<Homepage user={user} />} />
          <Route path="/books/:id" element={<BookDetails user={user} />} />
          <Route path="/books/:id/reader" element={<Reader />} />
          <Route path="/books/upload" element={<Upload />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login checkIsLoggedIn={checkIsLoggedIn} />}
          />
        </Routes>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
