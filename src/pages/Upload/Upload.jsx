import "./Upload.scss";

export default function Upload() {
  return (
    <section className="upload">
      <h1 className="upload__title">UPLOAD NEW BOOK</h1>

      <form className="upload__form">
        {<img className="upload" />}

        <label htmlFor="cover" className="form__label">
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

        <label htmlFor="title" className="form__label">
          TITLE
        </label>
        <input type="text" name="title" id="title" className="upload__title" />

        <label htmlFor="title" className="form__label">
          BLURB
        </label>
        <textarea name="blurb" id="blurb" className="form__blurb"></textarea>

        <label htmlFor="textFile" className="form__label">
          TEXT FILE
        </label>
        <button
          type="button"
          className="form__text-file"
          id="textFile"
          name="textFile"
        >
          UPLOAD
        </button>
      </form>
    </section>
  );
}
