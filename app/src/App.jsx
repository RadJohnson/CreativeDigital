import {useState} from 'react'
import FilmCard from './components/FilmCard'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="explorer">


                {/*FILTERS*/}

                <aside className="filters">

                    <h2>Filters</h2>

                    <p>Genre</p>

                    <p>☐ Action</p>

                    <p>☐ Comedy</p>

                    <p>☐ Drama</p>

                    <p>☐ Horror</p>

                </aside>


                {/*FILMS*/}

                <main>

                    <h1>Films</h1>


                    <div className="film-grid">


                        <div className="film">

                            <img
                                src="https://placehold.co/300x450"
                                alt="Film 1"
                            />

                            <h2>Film 1</h2>

                        </div>


                        <div className="film">

                            <img
                                src="https://placehold.co/300x450"
                                alt="Film 2"
                            />

                            <h2>Film 2</h2>

                        </div>


                        <div className="film">

                            <img
                                src="https://placehold.co/300x450"
                                alt="Film 3"
                            />

                            <h2>Film 3</h2>

                        </div>


                        <div className="film">

                            <img
                                src="https://placehold.co/300x450"
                                alt="Film 4"
                            />

                            <h2>Film 4</h2>

                        </div>


                        <div className="film">

                            <img
                                src="https://placehold.co/300x450"
                                alt="Film 5"
                            />

                            <h2>Film 5</h2>

                        </div>


                        <div className="film">

                            <img
                                src="https://placehold.co/300x450"
                                alt="Film 6"
                            />

                            <h2>Film 6</h2>

                        </div>


                        <div className="film">

                            <img
                                src="https://placehold.co/300x450"
                                alt="Film 7"
                            />

                            <h2>Film 7</h2>

                        </div>


                        <div className="film">

                            <img
                                src="https://placehold.co/300x450"
                                alt="Film 8"
                            />

                            <h2>Film 8</h2>

                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default App
