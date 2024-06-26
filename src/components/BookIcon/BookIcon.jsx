import { Link } from "react-router-dom";
import "./BookIcon.scss";

export default function BookIcon({ URL, title, author }) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  console.log(`${BACKEND_URL}/${URL}`);
  return (
    <Link to={``} className="bookIcon">
      <img src={`${BACKEND_URL}/${URL}`} alt="" className="bookIcon__img" />
      <p className="bookIcon__title">{title}</p>
      <p className="bookIcon__author">By {author}</p>
    </Link>
  );
}
