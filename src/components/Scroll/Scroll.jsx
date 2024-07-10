import axios from "axios";
import "./Scroll.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Markdown from "react-markdown";

export default function Scroll({ user }) {
  const [textFile, setTextFile] = useState(null);
  const [error, setError] = useState(false);
  const token = sessionStorage.getItem("token");

  const { id } = useParams();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  async function getText() {
    try {
      if (token) {
        const { data } = await axios.get(`${BACKEND_URL}/books/${id}/reader`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTextFile(data);
      } else {
        const { data } = await axios.get(`${BACKEND_URL}/books/${id}/reader`);
        setTextFile(data);
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }

  async function lockHeartbeat() {
    try {
      const { data } = await axios.patch(`${BACKEND_URL}/books/${id}/beat`);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getText();
    if (!user) {
      setInterval(lockHeartbeat, 3000);
    }
  }, []);

  if (error) {
    console.error(error);
    return <p>{error.messsage}</p>;
  }

  if (!textFile) {
    return <p>Loading...</p>;
  }

  if (textFile.locked) {
    return <p>Locked</p>;
  }
  //Splits onto new element if it is a new line at the end on a paragraph and not in the middle of a sentence or word.
 // const textArray = textFile.split(/(\r\n    \r\n|\r\n\r\n|\r\n )/);

  return (
    <section className="scroll">
      {/* {textArray.map((line) => (
        <p key={uuid()} className="scroll__line">
          {line}
        </p>
      ))} */}
      <Markdown>{textFile}</Markdown>
    </section>
  );
}
