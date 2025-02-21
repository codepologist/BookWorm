const BookList = ({ book }) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-clipped">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default BookList;
