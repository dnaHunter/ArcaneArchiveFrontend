import { useState } from "react";
import "./Upload.scss";
import axios from "axios";

export default function Upload() {
  const [img, setImg] = useState(null);
  const [text, setText] = useState(null);

  function handleCoverChange(e) {
    if (e.target.files) {
      setImg(e.target.files[0]);
    }
  }

  function handleTextChange(e) {
    if (e.target.files) {
      setText(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  }

  function validateInput(event) {
    console.log("validate");
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

    const data = new FormData();

    try {
      const {data} = await axios.post("url", data)
    } catch (error) {}
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

        <label htmlFor="title" className="upload__label">
          BLURB
        </label>
        <textarea
          onBlur={validateInput}
          placeholder="Blurb"
          name="blurb"
          id="blurb"
          className="upload__blurb"
        ></textarea>

        <label htmlFor="textFile" className="upload__label">
          TEXT FILE
        </label>
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
        <button className="upload__submit">SUBMIT</button>
      </form>
    </section>
  );
}
