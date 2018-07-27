import React, { Component } from "react";
import MovieList from "./movielist";
import MovieForm from "./movieform";
import MovieCard from "./moviecard";

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []

        };
    }

    componentDidMount() {
        this.getmovies();
    }

    getMovies() {
        fetch('/api/movies/')
            .then((response) => {
                return response.json();
            }).then((movies) => {
                console.log(movies);

                this.setState({
                    movies: movies
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    addMovie(post) {
        console.log(post);
        fetch('/api/movies/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(() => {
            this.getMovies();
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container">
                <MovieForm action="Create" postMovie={(post) => { this.addMovie(post); }} />
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}
export default Movies;
