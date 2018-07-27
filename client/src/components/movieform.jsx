import React, { Component } from 'react';
import { render } from 'react-dom';

class MovieForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            director: ''
        };
    }

    handleInputChange(title) {
        this.setState({ title });
    }

    handleContentChange(director) {
        this.setState({ director });
    }

    render() {
        return (
            <form className="card p-3 m-1">
                <label
                    htmlFor="title-input"
                    className="d-block m-2">{this.props.action} post:
                </label>
                <input
                    value={this.state.title}
                    onChange={(event) => { this.handleInputChange(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="Give me a title"
                />
                <input
                    value={this.state.content}
                    onChange={(event) => { this.handleContentChange(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="Here is the director"
                />
                <button
                    onClick={() => { this.props.postMovie(this.state) }}
                    type="button"
                    className="btn btn-primary m-2">Post!
                </button>
            </form>
        );
    }
}

export default MovieForm;