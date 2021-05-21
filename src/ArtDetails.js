import React from 'react';
import data from './sfpopos-data.json';
import './ArtDetails.css';
import { NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';

function ArtDetails(props) {
  const { id } = props.match.params // Location index
  const { images, title, desc } = data[id]

  return (
    <div className = 'details-area'>
      <div>
        <img className = "details-img" src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>

      <div>
        <h1>{ title }</h1>
        <p>{ desc }</p>
      </div>

      <div>
        
        <Link to={`/`}><button class="button">Back to portfolio</button></Link>

        </div>

    </div>
  )
}

export default ArtDetails