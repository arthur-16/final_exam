import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieList from './movielist'

export default class MovieCard extends MovieList {
    constructor() {
        super() 
    }
    render() {
        return (
            <div className="card" style={{ width: '18rem', height: '32rem', float: 'left' }}>
                <img className="card-img-top" src={`${this.props.poster}`} alt="" />
                <div className="card-body">
                    <h3 className="card-title">{this.props.title}</h3>
                    <h5 className="card-text">{this.props.director}</h5>

                </div>
            </div>
        )
    }
};


