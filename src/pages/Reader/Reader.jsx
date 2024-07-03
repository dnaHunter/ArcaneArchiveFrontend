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
        <img
          src={`${BACKEND_URL}/${book.coverImagePath}`}
          alt=""
          className="hero__cover"
        />
        <div className="hero__right">
          <div className="hero__info">
            <h1 className="hero__title">{book.title}</h1>
            <p className="hero__author">{book.author}</p>
          </div>
          <div className="hero__actions">
            <Link
              to={`/books/${id}`}
              className="hero__button"
            >
              REVIEW
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
