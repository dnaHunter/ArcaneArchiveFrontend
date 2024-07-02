import { Link, useParams } from "react-router-dom";
import "./Reader.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Reader() {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function getBookDetails() {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/books/${id}`);

      setBook(data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getBookDetails();
  }, []);

  if (error) {
    console.log(error);
    return <p>{error.messsage}</p>;
  }

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <section className="reader">
      <article className="hero">
        {" "}
        <img
          src={`${BACKEND_URL}/${book.coverImagePath}`}
          alt=""
          className="bookDetails__cover"
        />
        <div className="bookDetails__right">
          <div className="bookDetails__info">
            <h1 className="bookDetails__title">{book.title}</h1>
            <p className="bookDetails__author">{book.author}</p>
          </div>
          <div className="bookDetails__actions">
            <Link
              to={`/books/${id}`}
              className="bookDetails__button bookDetails__button--locked"
            >
              REVIEW
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
