import { Link } from "react-router-dom";
import "./BookIcon.scss";

export default function BookIcon({ URL, title, author }) {
  return (
    <Link to={``} className="bookIcon">
      <img src={URL} alt="" className="bookIcon__img" />
      <p className="bookIcon__title">{title}</p>
      <p className="bookIcon__author">By {author}</p>
    </Link>
  );
}
