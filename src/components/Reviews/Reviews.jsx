import "./Reviews.scss";

export default function Reviews() {
  return (
    <section className="reviews">
      <h2 className="reviews__title">Reviews</h2>
      {showReviewForm ? <ReviewForm /> : toggleButton}
    </section>
  );
}
