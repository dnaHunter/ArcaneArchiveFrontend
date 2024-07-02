import "./Review.scss";

export default function Review({ review }) {
  return (
    <article className="review">
      <div className="review__top">
        <div className="review__titleInfo">
          <p className="review__title">{review.title}</p>
          <p className="review__username">
            {!review.user_id ? "Anonymous" : review.username}
          </p>
        </div>
        <p className="review__time">
          {new Date(review.created_at).toLocaleDateString()}
        </p>
      </div>
      <p className="review__content">{review.body}</p>
    </article>
  );
}
