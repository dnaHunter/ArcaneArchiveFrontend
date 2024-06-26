import BookIcon from "../../components/BookIcon/BookIcon";
import "./Homepage.scss";

export default function Homepage() {
  return (
    <section className="home">
      <section className="home__all">
      <BookIcon
        URL={"https://picsum.photos/200/300"}
        title={"Test"}
        author={"Test"}
      />
      <BookIcon
        URL={"https://picsum.photos/200/300"}
        title={"Test"}
        author={"Test"}
      />
      <BookIcon
        URL={"https://picsum.photos/200/300"}
        title={"Test"}
        author={"Test"}
      />
      <BookIcon
        URL={"https://picsum.photos/200/300"}
        title={"Test"}
        author={"Test"}
      />
      <BookIcon
        URL={"https://picsum.photos/200/300"}
        title={"Test"}
        author={"Test"}
      />
      </section>
    </section>
  );
}
