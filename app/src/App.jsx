import { useEffect, useState } from 'react'
import FilmCard from './components/FilmCard'
import ToggleButton from './components/ToggleButton'

import './index.css'
// TODO : Move functions to bottom of the page

function App() {

    // for tracking selected filter options
    const [filters, setFilters] = useState([])
    const [selectedFilters, setSelectedFilter] = useState([])

    // for tracking clicked film buttons
    const [films, setFilms] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);

    // for error handling when loading films and filter options 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect runs code that is not part of describing the interface.
    // The empty array at the end means "run this once, when the application
    // only runs on first load bcause of [] being empty
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
                setIsLoading(false);
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

    // change the above function so it takes more arguments and it more reusable as they will effectively do the same thing
    function FilterSelecter(id) {
        if (selectedFilters.includes(id)) {
            setSelectedFilter(selectedFilters.filter((selectedFilters) => selectedFilters !== id));
        } else {
            setSelectedFilter([...selectedFilters, id]);
        }
    }

    console.log("films", films);
    // genre
    // country
    // year
    // shooting format
    // editorial type
    // lens size

    // would like to get a two point slider for runtime or something like that



    // films.forEach(film => { });
    // TODO: do not understand ...new set look into this
    const genre = [...new Set(films.map(film => film.genre))];

    console.log("genre list ", genre);
    // const country;
    // const year;
    // const shootingFormat;
    // const editorialType;
    // const lensSize;

    return (
        <>
            {/*<main>*/}

            <div className="explorer">

                {/*FILTERS*/}

                <aside className="filters">

                    <h2>Filters</h2>
                    <p>Genre</p>

                    {/* TODO: figure out if it is possible to grab filter options based on the data ascociated to the complete dataset */}
                    {/* consider getting all the possible filter options to be loaded in to the list box with filter category to be above the options within that list */}
                    {/*<select className="filter-list-genre" multiple>*/}
                    <div className="filter-list-genre" >


                        {films.map((filter) => (
                            <ToggleButton
                                key={filter.id}
                                id={filter.id}
                                name={filter.name}
                                synopsis={filter.synopsis}
                                form={filter.form}
                                country={filter.country}
                                year={filter.year}
                                runtimeMinutes={filter.runtimeMinutes}
                                themes={filter.themes}
                                isSelected={selectedFilters.includes(filter.id)}
                                onToggleSelect={FilterSelecter}
                            />
                        ))}


                        {filters.map((filter) => (
                            <ToggleButton
                                key={filter.id}
                                id={filter.id}
                                name={filter.name}
                                isSelected={selectedFilters.includes(filter.id)}
                                onToggleSelect={FilterSelecter}
                            />
                        ))}
                    </div>
                    {/*</select>*/}

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

                        {/* TODO: determine best method of hiding / revlealing film list refer to showcase example */}
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
