import { useEffect, useState } from "react";
import ReviewForm from "../ReviewForm/ReviewForm";
import "./Reviews.scss";
import axios from "axios";
import ReviewsList from "../ReviewsList/ReviewsList";

export default function Reviews({ bookID }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function getReviews() {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/reviews/${bookID}`);

      setReviews(data);
    } catch (error) {
      setError(error);
      console.error();
    }
  }

  useEffect(() => {
    getReviews();
  }, []);

  const toggleButton = (
    <button className="reviews__toggle" onClick={() => setShowReviewForm(true)}>
      + Add a Review?
    </button>
  );

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!reviews) {
    return <p>Loading...</p>;
  }

  return (
    <section className="reviews">
      <h2 className="reviews__title">Reviews</h2>
      {showReviewForm ? (
        <ReviewForm setShow={setShowReviewForm} />
      ) : (
        toggleButton
      )}
      <ReviewsList reviews={reviews} />
    </section>
  );
}
