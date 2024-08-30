import React, {act, useState} from "react";
import arrow_left from "../../assets/arrow_left.png"
import arrow_right from "../../assets/arrow_right.png"

const Carrousel = ({ activeLogement }) => {
    const [pictureIndex, setPictureIndex] = useState(0);

    const nextPicture = () => {
        let newIndex = pictureIndex+1;
        if (newIndex > activeLogement.pictures.length -1) {
            newIndex = 0;
        }
        setPictureIndex(newIndex);
    };

    const previewPicture = () => {
        let newIndex = pictureIndex - 1;
        if (newIndex < 0) {
            newIndex = activeLogement.pictures.length -1;
        }
        setPictureIndex(newIndex);
    };

    return (
        <div className="carrousel">
            <img className="carrousel__image"
            src={activeLogement.pictures[pictureIndex]}
            alt={activeLogement.title} />
            {activeLogement.pictures.length > 1 && (
                <>
                <img className="carrousel__arrow carrousel__arrow__left"
                src={arrow_left}
                onClick={previewPicture}
                alt="Afficher l'aperçu du logement précédent" />

                <p className="carrousel__picture-counter">
                    {pictureIndex +1}/{activeLogement.pictures.length}
                </p>
                </>
            ) }
        </div>
    )
}

export default Carrousel