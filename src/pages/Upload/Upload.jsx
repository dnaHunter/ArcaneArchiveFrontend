import { useState } from "react";
import "./Upload.scss";

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

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="upload">
      <h1 className="upload__title">UPLOAD NEW BOOK</h1>

      <form className="upload__form">
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
      </form>
    </section>
  );
}
