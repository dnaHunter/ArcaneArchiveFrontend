import Review from "../Review/Review";
import "./ReviewsList.scss";

export default function ReviewsList({ reviews }) {
  
  return (
    <section className="list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </section>
  );
}
