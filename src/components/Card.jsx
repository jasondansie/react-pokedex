import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.card}>
            <h2>{props.name}</h2>
            <img src={props.image} alt="pokemon" />
            <Link to={`${props.name}`}>See more</Link>
        </div>
    );
};

export default Card;