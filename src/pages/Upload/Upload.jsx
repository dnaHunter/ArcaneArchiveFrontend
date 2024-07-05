import { useState } from "react";
import "./Upload.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const [img, setImg] = useState(null);
  const [text, setText] = useState(null);
  const [submitError, setSubmitError] = useState(false);

  const nav = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  function handleCoverChange(e) {
    if (e.target.files) {
      setImg(e.target.files[0]);
    }
  }

  function handleTextChange(e) {
    if (e.target.files) {
      setText(e.target.files[0]);
    }
  }

  function validateInput(event) {
    const value = event.target.value;

    if (!value) {
      event.target.classList.add("upload__input-error");
    } else {
      event.target.classList.remove("upload__input-error");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const title = e.target.title.value;
    const blurb = e.target.blurb.value;
    const author = e.target.author.value;
    const coverFile = e.target.cover.files[0];
    const textFile = e.target.textFile.files[0];

    if (!title) {
      e.target.title.classList.add("newReview__input-error");
      return;
    } else {
      e.target.title.classList.remove("newReview__input-error");
    }

    if (!blurb) {
      e.target.blurb.classList.add("newReview__input-error");
      return;
    } else {
      e.target.blurb.classList.remove("newReview__input-error");
    }

    if (!author) {
      e.target.author.classList.add("newReview__input-error");
      return;
    } else {
      e.target.author.classList.remove("newReview__input-error");
    }

    const bookData = new FormData();
    bookData.append("title", title);
    bookData.append("blurb", blurb);
    bookData.append("author", author);
    bookData.append("coverFile", coverFile);
    bookData.append("textFile", textFile);

    try {
      const { data } = await axios.post(`${BACKEND_URL}/books`, bookData);

      nav("/");
    } catch (error) {
      console.error(error);
      setSubmitError(true);
      setTimeout(() => {
        setSubmitError(false);
      }, 30000);
    }
  }

  return (
    <section className="upload">
      <h1 className="upload__title">UPLOAD NEW BOOK</h1>

      <form onSubmit={handleSubmit} className="upload__form">
        {img ? (
          <img src={URL.createObjectURL(img)} className="upload__cover" />
        ) : (
          <div className="upload__placeholder-cover"></div>
        )}
        <div className="upload__label-input">
          <label htmlFor="cover" className="upload__label">
            COVER IMAGE
          </label>
          <label className="upload__cover-button">
            <input
              onChange={handleCoverChange}
              type="file"
              id="cover"
              name="cover"
              className="upload__cover-input"
            />
            UPLOAD
          </label>
        </div>

        <div className="upload__label-input">
          <label htmlFor="title" className="upload__label">
            TITLE
          </label>
          <input
            onBlur={validateInput}
            placeholder="Title"
            type="text"
            name="title"
            id="title"
            className="upload__input-title"
          />
        </div>

        {/* AUTHOR */}
        <div className="upload__label-input">
          <label htmlFor="author" className="upload__label">
            AUTHOR
          </label>
          <input
            onBlur={validateInput}
            placeholder="Author"
            type="text"
            name="author"
            id="author"
            className="upload__input-author"
          />
        </div>

        <div className="upload__label-input">
          <label htmlFor="title" className="upload__label upload__label--top">
            BLURB
          </label>
          <textarea
            onBlur={validateInput}
            placeholder="Blurb"
            name="blurb"
            id="blurb"
            className="upload__blurb"
          ></textarea>
        </div>

        <div className="upload__label-input">
          <label htmlFor="textFile" className="upload__label">
            TEXT FILE
          </label>
          <div className="upload__textRight">
            <label className="upload__text-file">
              <input
                onChange={handleTextChange}
                type="file"
                className="upload__text-file-input"
                id="textFile"
                name="textFile"
              />
              UPLOAD
            </label>
            {text && <p className="upload__filename">{text.name}</p>}
          </div>
        </div>
        <button className="upload__submit">SUBMIT</button>
      </form>
      {submitError && (
        <p className="upload__submit-error">
          There was a problem uploading the book. Try again later.
        </p>
      )}
    </section>
  );
}
