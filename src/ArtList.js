import React from 'react';
import './ArtList.css';
import data from './sfpopos-data.json'


import ArtItem from './ArtItem';

function ArtList (){

  const art = data.map(({ title, images }, i) => {
    return (
      <ArtItem
        id={i}
        key={title}
        name={title}
        image={images[0]}
      />
    )
  })
  
    return (
      <div className="ArtList">
        { art }
      </div>
    )



}

export default ArtList