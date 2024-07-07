import { useEffect, useState } from "react";
import BookIcon from "../../components/BookIcon/BookIcon";
import "./Homepage.scss";
import axios from "axios";
import BorrowedList from "../../components/BorrowedList/BorrowedList";

export default function Homepage({ user }) {
  const [bookList, setBookList] = useState(null);
  const [error, setError] = useState(false);
  const [borrowed, setBorrowed] = useState(null);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const token = sessionStorage.getItem("token");

  async function getBorrowedList() {
    if (!user) {
      setBorrowed(null);
      return;
    }

    try {
      const { data } = await axios.get(`${BACKEND_URL}/users/borrowed-books`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBorrowed(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getBookList() {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/books`);

      setBookList(data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getBookList();
    getBorrowedList();
  }, [user]);

  if (error) {
    console.error(error);
    return <p>{error.messsage}</p>;
  }

  if (!bookList) {
    return <p>Loading...</p>;
  }

  return (
    <section className="home">
      <div className="home__wrapper">
        {borrowed && <BorrowedList borrowedList={borrowed} />}
        <h2 className="home__allTitle">ALL BOOKS</h2>
        <section className="home__all">
          {bookList.map((book) => (
            <BookIcon
              key={book.id}
              id={book.id}
              URL={book.coverImagePath}
              title={book.title}
              author={book.author}
            />
          ))}
        </section>
      </div>
    </section>
  );
}
