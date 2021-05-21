import React from "react";
import {Movies} from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";


class Main extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=207af2f4&s=matrix')
            .then(r => r.json())
            .then(data => this.setState({movies: data.Search}))

    }

    handlePress = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=207af2f4&s=${str}` )
            .then(r => r.json())
            .then(data => this.setState({movies: data.Search}))

    }


    render() {
        const {movies} = this.state;



        return (

        <main className='container content'>
            <Search
                handlePress={this.handlePress}
            />
            {movies.length ? <Movies movies={movies}/> : <Preloader/>}

        </main>
    )
    }
}

export default Main;