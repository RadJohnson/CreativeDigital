import {useEffect, useState} from 'react'
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
    // only runs on first load because of [] being empty
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

    // console.log("films", films);
    // genre
    // country
    // year
    // shooting format
    // editorial type
    // lens size

    // would like to get a two point slider for runtime or something like that

    // films.forEach(film => { });
    // TODO: do not understand ...new set look into this

    const form = [...new Set(films.map(film => film.form))];
    const genres = [...new Set(films.flatMap(film => film.genres))];
    const themes = [...new Set(films.flatMap(film => film.themes))];
    const country = [...new Set(films.map(film => film.country))];
    const shootingFormat = [...new Set(films.map(film => film.shootingFormat))];
    const editorialType = [...new Set(films.map(film => film.editorialType))];
    const aspectRatio = [...new Set(films.map(film => film.aspectRatio))];
    const color = [...new Set(films.map(film => film.colour))];


    const filterCategories = [
        {
            categoryName: "Form",
            filterCategory: form,
        },
        {
            categoryName: "Genres",
            filterCategory: genres
        },
        {
            categoryName: "Themes",
            filterCategory: themes
        },
        {
            categoryName: "Country",
            filterCategory: country
        },
        {
            categoryName: "ShootingFormat",
            filterCategory: shootingFormat
        },
        {
            categoryName: "EditorialType",
            filterCategory: editorialType
        },
        {
            categoryName: "AspectRatio",
            filterCategory: aspectRatio
        },
        {
            categoryName: "Colour",
            filterCategory: color
        }
    ];

    for (let i = 0, id = 0; i < filterCategories.length; i++) {
        let filterCategoryIds = [];
        for (let j = 0; j < filterCategories[i].filterCategory.length; j++) {
            filterCategoryIds[j] = id;
            id++;
        }
        filterCategories[i].id = filterCategoryIds;
        /*add the array and the contents here*/
    }

    //console.log(filterCategories);

    // console.log(filterCategories);
    // const year;
    // console.log("form list", form);
    // console.log("genre list ", genres);
    // console.log("theme list ", themes);

    return <>
        {/*<main>*/}

        <div className="explorer">

            {/*FILTERS*/}

            <aside className="filters">

                <h2>Filters</h2>

                {/* TODO: figure out if it is possible to grab filter options based on the data associated to the complete dataset */}
                {/* consider getting all the possible filter options to be loaded in to the list box with filter category to be above the options within that list */}
                {/*<select className="filter-list-genre" multiple>*/}
                <div className="filter-list-genre">
                    {
                        filterCategories.map((filterCategory) => (
                                //do not understand why this is needed
                                <div>
                                    <p>{filterCategory.categoryName}</p>

                                    {/*likely need to map through and another underneath similar to this*/}
                                    {/*this just needs to be the same as the category name*/}
                                    {
                                        //TODO: need to rename the local variable filter category
                                        filterCategory.filterCategory.map((filter, j) => (

                                            <ToggleButton
                                                key={filterCategory.id[j]}// need to just set these to be equal to current iteration fo the loop right?
                                                id={filterCategory.id[j]} // need to just set these to be equal to current iteration fo the loop right?
                                                name={filterCategory.filterCategory[j]}
                                                onToggleSelect={FilterSelecter}
                                            />
                                        ))

                                    }
                                </div>
                            ),
                        )
                    }


                    {/*{filters.map((filter) => (*/}
                    {/*    <ToggleButton*/}
                    {/*        key={filter.id}*/}
                    {/*        id={filter.id}*/}
                    {/*        name={filter.name}*/}
                    {/*        isSelected={selectedFilters.includes(filter.id)}*/}
                    {/*        onToggleSelect={FilterSelecter}*/}
                    {/*    />*/}
                    {/*))}*/}
                </div>
                {/*</select>*/}

                {/*<p>☐ Action</p>*/}

                {/*<p>☐ Comedy</p>*/}

                {/*<p>☐ Drama</p>*/}

                {/*<p>☐ Horror</p>*/}

            </aside>

            {
                isLoading && <p className="archive-status">Loading the archive...</p>
            }

            {
                error && <p className="archive-status">{error}</p>
            }
            {
                !isLoading && !error && (
                    <div>
                        {/*FILMS*/}

                        <h1>Films</h1>

                        {/* TODO: determine best method of hiding / revealing film list refer to showcase example */}
                        <div className="film-grid">

                            {
                                films.map((film) => (
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
                                ))
                            }

                        </div>
                    </div>
                )
            }
        </div>
        {/*</main>*/
        }
    </>;
}

export default App
