import { Link } from "react-router-dom";
import "./BookDetails.scss";

export default function BookDetails() {
  return (
    <section className="bookDetails">
      <article className="bookDetails__hero">
        <img
          src="http://localhost:8080/Covers/dracula-cover.jpg"
          alt=""
          className="bookDetails__cover"
        />

        <div className="bookDetails__right">
          <div className="bookDetails__info">
            <h1 className="bookDetails__title">TITLE</h1>
            <p className="bookDetails__author">Author</p>
          </div>
          <div className="bookDetails__actions">
            <Link className="bookDetails__button">READ</Link>
          </div>
        </div>
      </article>
    </section>
  );
}
