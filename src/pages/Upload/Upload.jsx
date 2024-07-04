import { useState } from "react";
import "./Upload.scss";

export default function Upload() {
  const [showImg, setShowImg] = useState(false);
  return (
    <section className="upload">
      <h1 className="upload__title">UPLOAD NEW BOOK</h1>

      <form className="upload__form">
        {showImg ? (
          <img className="upload__cover" />
        ) : (
          <div className="upload__placeholder-cover"></div>
        )}

        <label htmlFor="cover" className="upload__label">
          COVER IMAGE
        </label>
        <button
          type="button"
          id="cover"
          name="cover"
          className="upload__cover-button"
        >
          UPLOAD
        </button>

        <label htmlFor="title" className="upload__label">
          TITLE
        </label>
        <input
          placeholder="Title"
          type="text"
          name="title"
          id="title"
          className="upload__input-title"
        />

        <label htmlFor="title" className="upload__label">
          BLURB
        </label>
        <textarea
          placeholder="Blurb"
          name="blurb"
          id="blurb"
          className="upload__blurb"
        ></textarea>

        <label htmlFor="textFile" className="upload__label">
          TEXT FILE
        </label>
        <button
          type="button"
          className="upload__text-file"
          id="textFile"
          name="textFile"
        >
          UPLOAD
        </button>
      </form>
    </section>
  );
}
