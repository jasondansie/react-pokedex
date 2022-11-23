import React, { Component } from 'react';

class PokeSingle extends Component {
    state = {
        data: [],
        isLoading: false,
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.PokeSingle}`)
            .then((res) => res.json())
            .then((data) => {
            })
    }

    render() {

        if (this.state.isLoading) {
            return <p>Loading... </p>
        }

        console.log(this.props.params.PokeSingle);
        return (
            <div>
                <h1>Single Pokeman here</h1>
            </div>
        );
    }
};

export default PokeSingle;