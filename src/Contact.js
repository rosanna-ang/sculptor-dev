import React from 'react';

import './ArtDetails.css';

function Contact (){
    return (
        <div className="details-area">
            <h1>Contact</h1>
            <br />

            <h2>Address</h2>
            <h4>Box 564, Disneyland, USA</h4>
            <br />

            <h2>Phone</h2>
            <h4>1234-5678</h4>
            <br />

            <h2>Email</h2>
            <h4><a href="mailto:something@something.com">something@something.com</a></h4>
            <br />



        </div>
    )
}

export default Contact;