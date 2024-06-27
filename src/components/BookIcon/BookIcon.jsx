import { Link } from "react-router-dom";
import "./BookIcon.scss";

export default function BookIcon({ id, URL, title, author }) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  return (
    <article className="bookIcon">
      <Link to={`/books/${id}`} className="bookIcon__link">
        <img src={`${BACKEND_URL}/${URL}`} alt="" className="bookIcon__img" />
        <div className="bookIcon__info">
          <p className="bookIcon__title">{title}</p>
          <p className="bookIcon__author">By {author}</p>
        </div>
      </Link>
    </article>
  );
}
