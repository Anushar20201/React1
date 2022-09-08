import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Gallery(props) {

    const currentCategory = {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects",
    };


    //  capitalizeFirstLetter() helper function to capitalize the name value when it's rendered

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div>
                <img src={photo} alt="Commercial Example"
                    className="img-thumbnail mx-1"></img>
            </div>
        </section>
    );
}

export default Gallery;