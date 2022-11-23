import React from 'react';
import classes from './Card.module.css';

const Card = () => {
    return (
        <div className={classes.card}>
            <img src="https://source.unsplash.com/500x400/?animals" alt="pokemon" />
        </div>
    );
};

export default Card;