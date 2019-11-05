import React from "react"

const Zanrai = ({genres, rusiuoti}) =>
    (
        <div className="genres">
            {
                genres.map((genre) => (
                    <div
                        className="genre"
                        key={genre.id}
                        onClick={e => rusiuoti(genre.id)}
                    >
                        {genre.name}
                    </div>
                ))
            }
        </div>
    )
export default Zanrai