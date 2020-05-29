import React from "react";
import styles from './Gallery.module.css';
import {artwork} from '../../assets/artwork'

const Gallery = () => {

    const elements = [
        artwork.modulaciones,
        artwork.maqroll,
        artwork.sono, 
        artwork.espectrograma, 
        artwork.aguaexploratorio,
        artwork.paisajecasa,
        artwork.contaminacion,
        artwork.cellularautomata, 
        artwork.pandemiaparanoia,  
        artwork.pinturasonido, 
        artwork.cavidad
    ];

    return (
        <div className={styles.gallery}>

            { elements.map( (artpiece, index) => {
                return (
                    <div className={styles.item}>
                        <img src={artpiece.image} alt={"Gallery image " + index.toString()} className={styles.image} />
                        <div className={styles.textContainer}>
                            <a href={artpiece.link} target="_blank" rel="noopener noreferrer">
                                <div className={styles.title}>{artpiece.title}</div>
                                <div className={styles.text}>{artpiece.text}</div>
                                <div className={styles.keywords}>{artpiece.keywords}</div>
                            </a>
                        </div>
                    </div>
                )
            } ) }

        </div>
    )

};

export default Gallery;