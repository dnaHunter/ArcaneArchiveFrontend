import { useEffect, useState } from "react";
import BookIcon from "../../components/BookIcon/BookIcon";
import "./Homepage.scss";
import axios from "axios";

export default function Homepage() {
  const [bookList, setBookList] = useState(null);
  const [error, setError] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function getBookList() {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/books`);
      console.log(`${BACKEND_URL}/books`);

      setBookList(data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getBookList();
  }, []);

  if (error) {
    console.log(error);
    return <p>{error.messsage}</p>;
  }

  if (!bookList) {
    return <p>Loading...</p>;
  }

  return (
    <section className="home">
      <section className="home__all">
        {bookList.map((book) => (
          <BookIcon
            key={book.id}
            URL={book.coverImagePath}
            title={book.title}
            author={book.author}
          />
        ))}
      </section>
    </section>
  );
}
