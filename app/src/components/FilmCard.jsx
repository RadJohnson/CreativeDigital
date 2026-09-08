function FilmCard({ id, title, synopsis, form, country, year, runtimeMinutes, themes, poster, posterAlt, isSelected, onToggleSelect }) {

    const cardClass = isSelected ? "film-card film-card--selected" : "film-card";

    return (
        <article className={cardClass}>
            {/* Two films in the archive have no artwork, so the card has to cope. */}
            {poster ? (<img className="film-card__poster" src={poster} alt={posterAlt} />)//poster alt is text for screen reader and for when the image doesnt load
                : (<div className="film-card__poster film-card__poster--missing">
                    No artwork
                </div>)
            }

            <p className="film-meta">
                {form} · {country} · {year} ·{runtimeMinutes} mins
            </p>

            <h3>{title}</h3>
            <p>{synopsis}</p>

            <ul className="theme-list">
                {themes.map((theme) => (
                    <li key={theme}>{theme}</li>
                ))}
            </ul>


            <button type="button" onClick={() => onToggleSelect(id)}>
                {isSelected ? "Remove from programme" : "Add to programme"}
            </button>
        </article>
    );
}

export default FilmCard;