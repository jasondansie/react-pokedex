import React from 'react';
import Card from './Card';
import classes from './Pokelist.module.css';

const Pokelist = () => {
    return (
        <div>
            <h1>The Pokelist</h1>
            <div className={classes.cards}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    );
};

export default Pokelist;