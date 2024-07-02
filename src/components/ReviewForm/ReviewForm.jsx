import axios from "axios";
import "./ReviewForm.scss";
import { useParams } from "react-router-dom";

export default function ReviewForm({ setShow, getReviews }) {
  const { id } = useParams();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  function validateInput(event) {
    const value = event.target.value;

    if (!value) {
      event.target.classList.add("newReview__input-error");
    } else {
      event.target.classList.remove("newReview__input-error");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const title = event.target.title.value;
    const body = event.target.area.value;

    if (!title) {
      event.target.title.classList.add("newReview__input-error");
      return;
    } else {
      event.target.title.classList.remove("newReview__input-error");
    }

    if (!body) {
      event.target.area.classList.add("newReview__input-error");
      return;
    } else {
      event.target.area.classList.remove("newReview__input-error");
    }

    const post = {
      title,
      body,
      book_id: id,
    };

    const response = await axios.post(`${BACKEND_URL}/reviews`, post);

    event.target.reset();

    getReviews();
  }

  return (
    <form onSubmit={handleSubmit} className="newReview">
      <label htmlFor="title" className="newReview__label">
        TITLE
      </label>
      <input
        onBlur={validateInput}
        type="text"
        id="title"
        name="title"
        className="newReview__title"
        placeholder="Title"
      />

      <label htmlFor="area" className="newReview__label">
        REVIEW
      </label>
      <textarea
        onBlur={validateInput}
        name="area"
        id="area"
        className="newReview__area"
        placeholder="I liked ..."
      ></textarea>

      <div className="newReview__actions">
        <button className="newReview__button">Review</button>
        <button
          type="button"
          onClick={() => setShow(false)}
          className="newReview__cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
