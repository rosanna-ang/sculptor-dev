import React from 'react';
import './ArtItem.css';
import { Link } from 'react-router-dom'



function ArtItem(props) {
    const { name, image, id } = props
    return (
        <div>


            <div class="container">
                <Link to={`/details/${id}`}>
                    <img class="img-thumb"
                        src={`${process.env.PUBLIC_URL}images/${image}`}
                        alt={`${process.env.PUBLIC_URL}images/${name}`}
                    />
                    <div class="overlay">
                        <div class="text">{name}</div>


                    </div>

                </Link>
            </div>


        </div>
    )

}

export default ArtItem