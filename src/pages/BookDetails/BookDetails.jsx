import { Link, useParams } from "react-router-dom";
import "./BookDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Reviews from "../../components/Reviews/Reviews";
import Reader from "../Reader/Reader";

export default function BookDetails({ user }) {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const token = sessionStorage.getItem("token");

  async function handleBorrow() {
    try {
      //Issue with axios when sending auth headers in patch request
      const { data } = await axios.get(`${BACKEND_URL}/books/${id}/borrow`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      if (error.response.data.message === "locked") {
        getBookDetails();
      }
    }
  }

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
            {user && user.id === book.lockedBy_id && (
              <p className="bookDetails__borrowed">
                You have borrowed this book
              </p>
            )}
          </div>
          <div className="bookDetails__actions">
            {book.locked ? (
              <Link className="bookDetails__button bookDetails__button--locked">
                LOCKED
              </Link>
            ) : (
              <>
                {user && (
                  <button
                    onClick={handleBorrow}
                    className="bookDetails__borrow"
                  >
                    BORROW FOR A WEEK
                  </button>
                )}

                <Link to="reader" className="bookDetails__button">
                  READ
                </Link>
              </>
            )}
          </div>
        </div>
      </article>
      <article className="bookDetails__blurb">
        <h2 className="bookDetails__blurbTitle">Blurb</h2>
        <p className="bookDetails__blurbContent">{book.blurb}</p>
      </article>
      <Reviews bookID={id} user={user} />
    </section>
  );
}
