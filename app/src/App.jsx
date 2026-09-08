import { useEffect, useState } from 'react'
import FilmCard from './components/FilmCard'
import ToggleButton from './components/ToggleButton'

import './index.css'


function App() {
    const [filters, setFilters] = useState([])
    const [films, setFilms] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect runs code that is not part of describing the interface.
    // The empty array at the end means "run this once, when the application
    // starts", rather than after every render.
    useEffect(() => {
        fetch("/films.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Could not load the film archive.");
                }
                return response.json();
            })
            .then((data) => {
                setFilms(data);
                setIsLoading(false);
            })
            .catch((problem) => {
                setError(problem.message);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch("/filters.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Could not load the film filter options.");
                }
                return response.json();
            })
            .then((data) => {
                setFilters(data);
                // setIsLoading(false);
            })
            .catch((problem) => {
                setError(problem.message);
                setIsLoading(false);
            });
    }, []);

    function handleToggleSelect(id) {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    }


    return (
        <>
            {/*<main>*/}

            <div className="explorer">

                {/*FILTERS*/}

                <aside className="filters">

                    <h2>Filters</h2>
                    <p>Genre</p>

                    {/* consider getting all the possible filter options to be loaded in to the list box with filter catagory to be above the options within that list */}
                    <select className="filter-list-genre" multiple>
                        {filters.map((filter) => (<ToggleButton
                            key={filter.id}
                            id={filter.id}
                            name={filter.name}
                            buttonimage={filter.buttonimage}
                            buttonAlt={filter.buttonAlt}

                        />
                        ))}
                    </select>
                    {/*<p>☐ Action</p>*/}

                    {/*<p>☐ Comedy</p>*/}

                    {/*<p>☐ Drama</p>*/}

                    {/*<p>☐ Horror</p>*/}

                </aside>

                {isLoading && <p className="archive-status">Loading the archive...</p>}

                {error && <p className="archive-status">{error}</p>}
                {!isLoading && !error && (
                    <div>
                        {/*FILMS*/}

                        <h1>Films</h1>

                        <div className="film-grid">

                            {films.map((film) => (
                                <FilmCard
                                    key={film.id}
                                    id={film.id}
                                    title={film.title}
                                    synopsis={film.synopsis}
                                    form={film.form}
                                    country={film.country}
                                    year={film.year}
                                    runtimeMinutes={film.runtimeMinutes}
                                    themes={film.themes}
                                    poster={film.poster}
                                    posterAlt={film.posterAlt}
                                    isSelected={selectedIds.includes(film.id)}
                                    onToggleSelect={handleToggleSelect}
                                />
                            ))}

                        </div>
                    </div>
                )}
            </div>
            {/*</main>*/}
        </>
    );
}

export default App
