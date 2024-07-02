import { Link, useParams } from "react-router-dom";
import "./BookDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Reviews from "../../components/Reviews/Reviews";
import Reader from "../Reader/Reader";

export default function BookDetails() {
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
    <section className="bookDetails">
      <article className="bookDetails__hero">
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
            {book.locked ? (
              <Link className="bookDetails__button bookDetails__button--locked">
                LOCKED
              </Link>
            ) : (
              <Link to="reader" className="bookDetails__button">
                READ
              </Link>
            )}
          </div>
        </div>
      </article>
      <article className="bookDetails__blurb">
        <h2 className="bookDetails__blurbTitle">Blurb</h2>
        <p className="bookDetails__blurbContent">{book.blurb}</p>
      </article>
      <Reviews bookID={id} />
    </section>
  );
}
