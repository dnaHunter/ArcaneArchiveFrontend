import axios from "axios";
import "./Scroll.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Scroll() {
  const [textFile, setTextFile] = useState(null);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function getText() {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/books/${id}/reader`);

      setTextFile(data);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  useEffect(() => {
    getText();
  }, []);

  if (error) {
    console.log(error);
    return <p>{error.messsage}</p>;
  }

  if (!textFile) {
    return <p>Loading...</p>;
  }
  //Splits onto new element if it is a new line at the end on a paragraph and not in the middle of a sentence or word.
  const textArray = textFile.split(/(\r\n    \r\n|\r\n\r\n|\r\n )/);

  return (
    <section className="scroll">
      {textArray.map((line) => (
        <p className="scroll__line">{line}</p>
      ))}
    </section>
  );
}
