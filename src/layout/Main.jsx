import React from "react";
import {Movies} from "../components/Movies";
import Preloader from "../components/Preloader";


class Main extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=207af2f4&s=matrix&page=1')
            .then(r => r.json())
            .then(data => this.setState({movies: data.Search}))
        console.log(this.state.movies)

    }

    render() {
        const { movies } = this.state;

        return (

            <main className='container content'>

                {movies.length ? <Movies movies={movies}/> : <Preloader />}

            </main>
        )
    }
}

export default Main;