import { useState } from "react";
import ReviewForm from "../ReviewForm/ReviewForm";
import "./Reviews.scss";
import axios from "axios";

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

  const toggleButton = (
    <button className="reviews__toggle" onClick={() => setShowReviewForm(true)}>
      + Add a Review?
    </button>
  );

  return (
    <section className="reviews">
      <h2 className="reviews__title">Reviews</h2>
      {showReviewForm ? <ReviewForm /> : toggleButton}
    </section>
  );
}
