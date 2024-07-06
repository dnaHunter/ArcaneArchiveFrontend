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
    console.log("logged");
    const token = sessionStorage.getItem("token");

    console.log(token);

    if (!token) {
      console.log("token null");
      setUser(null);
      return;
    }

    try {
      const { data } = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/users/me",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(data);

      // TODO: Ensure this works upon login without having to refresh the page
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
        <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/books/:id" element={<BookDetails />} />
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
