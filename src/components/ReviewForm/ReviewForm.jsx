import "./ReviewForm.scss";

export default function ReviewForm({ setShow }) {
  return (
    <form className="newReview">
      <label htmlFor="title" className="newReview__label">
        TITLE
      </label>
      <input
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
