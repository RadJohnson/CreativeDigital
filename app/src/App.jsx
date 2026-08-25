import { useState } from 'react'
import FilmCard from './components/FilmCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <div className="page-container">
          <div className="row-side">
            <dl className="filter-box-is-active-has-menu-is-category">
              <dt className="filter-box-title">
                SubCategory
                <ul className="filter-box">
                  <button className="filter-button">
                    (1)
                  </button>
                  <button className="filter-button">
                    (2)
                  </button>
                  <button className="filter-button">
                    (3)
                  </button>
                </ul>
              </dt>
            </dl>
          </div>

          <section>
            <div>
              <p>Stage 1 Archive</p>
              <h2>Choose from Six Films</h2>
            </div>
            <p>Target running time 35 mins</p>

            <div className="film-grid">
              <article className="film-card">
                <h3>Quiet Cartographer</h3>
                <p>Drama - UK</p>
                <p>Running time: 35 mins</p>
                <button className="film-card-button">Add To Programme</button>
              </article>

              <article className="film-card">
                <h3>Storming The Control Room</h3>
                <p>Drama - UK</p>
                <p>Running time: 35 mins</p>
                <button className="film-card-button">Add To Programme</button>
              </article>

              <article className="film-card">
                <h3>333 Persecuted Flame</h3>
                <p>Drama - UK</p>
                <p>Running time: 35 mins</p>
                <button className="film-card-button">Add To Programme</button>
              </article>

              <article className="film-card">
                <h3>Reading Room</h3>
                <p>Drama - UK</p>
                <p>Running time: 35 mins</p>
                <button className="film-card-button">Add To Programme</button>
              </article>

              <article className="film-card">
                <h3>Three Double Cross'</h3>
                <p>Drama - UK</p>
                <p>Running time: 35 mins</p>
                <button className="film-card-button">Add To Programme</button>
              </article>
            </div>

          </section>
        </div>
      </main>
    </>
  );
}

export default App
