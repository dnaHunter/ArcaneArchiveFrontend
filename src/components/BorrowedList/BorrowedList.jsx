import BookIcon from "../BookIcon/BookIcon";
import "./BorrowedList.scss";

export default function BorrowedList({ borrowedList }) {
  console.log(borrowedList);
  return (
    <section className="borrowed">
      <h2 className="borrowed__title">YOUR BORROWED BOOKS</h2>
      <div className="borrowed__list">
        {borrowedList.map((book) => 
          <BookIcon
            key={book.id}
            id={book.id}
            URL={book.coverImagePath}
            title={book.title}
            author={book.author}
          />
        )}
      </div>
    </section>
  );
}
