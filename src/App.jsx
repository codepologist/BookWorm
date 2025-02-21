import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import { logo, search } from "./assets";

const API_KEY = "import.meta.env.VITE_GOOGLE_API_KEY";
const BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

function App() {
  const [books, setBooks] = useState([]);

  const searchBooks = async (title) => {
    const response = await fetch(`${BASE_URL}?q=${title}&key=${API_KEY}`);
    const data = await response.json();
    setBooks(data.items);
  };

  useEffect(() => {
    searchBooks("JavaScript");
  }, []);

  return (
    <>
      <section className="hero hero-bg is-medium">
        {/* Hero head: will stick at the top */}
        <div className="hero-head">
          <nav className="navbar is-transparent mt-2 is-expanded">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img src={logo} alt="BookWorm" />
                </a>
                <span className="navbar-burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a
                    className="navbar-item is-active"
                    style={{ fontSize: "16px", lineHeight: "20px" }}
                  >
                    Home
                  </a>
                  <a
                    className="navbar-item is-active"
                    style={{ fontSize: "16px", lineHeight: "20px" }}
                  >
                    Company
                  </a>
                  <a
                    className="navbar-item"
                    style={{ fontSize: "16px", lineHeight: "20px" }}
                  >
                    Books
                  </a>
                  <a
                    className="navbar-item"
                    style={{ fontSize: "16px", lineHeight: "20px" }}
                  >
                    Events
                  </a>
                  <a
                    className="navbar-item"
                    style={{ fontSize: "16px", lineHeight: "20px" }}
                  >
                    Team
                  </a>
                  <a
                    className="navbar-item"
                    style={{ fontSize: "16px", lineHeight: "20px" }}
                  >
                    Clients
                  </a>
                </div>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a
                    className="navbar-item is-active"
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                  >
                    Log in
                  </a>
                  {/* <a className="navbar-item"> Books </a> */}
                  {/* <figure className="image is-square is-48x48">
                    <img
                      className="is-rounded"
                      src={active_user}
                      style={{
                        objectFit: "cover",
                        backgroundColor: "#fff",
                        border: "1px solid #ddd",
                        padding: "4px",
                      }}
                    />
                  </figure> */}
                  <button
                    className="button is-light is-outlined"
                    style={{ fontSize: "14px", lineHeight: "20px" }}
                  >
                    Get started - it&lsquo;s free
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title hero-title">
              More Than 458,948 Books
              <br /> Over Here
            </h1>
            <p className="subtittle hero-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, quam vitae <br /> est Sed non eros elementum nulla
              sodales ullamcorper.
            </p>
            {/* Search Form Starts Here */}
            <div className="container is-flex is-justify-content-center mt-5">
              <div className="field has-addons">
                <div
                  className="control is-expanded"
                  style={{ fontSize: "12px", minHeight: "40px" }}
                >
                  <input
                    className="input search-field is-medium is-radiusless"
                    type="text"
                    value="SQL"
                    placeholder="Search for books"
                    onChange={() => {}}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info is-medium is-radiusless"
                    onClick={() => {}}
                    style={{ width: 100 }}
                  >
                    <span className="icon is-small">
                      <img src={search} />
                    </span>
                  </button>
                </div>
              </div>
              {/* Search Form Ends Here */}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title">Books</h2>
          <div className="columns is-multiline">
            {books.map((book) => (
              <div className="column is-one-quarter">
                <BookList key={book.id} book={book} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
