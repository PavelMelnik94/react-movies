import React from "react";
import {Movies} from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";


class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=207af2f4&s=matrix')
            .then(r => r.json())
            .then(data => this.setState({movies: data.Search}))

    }

    handlePress = (str, type = 'all') => {
        fetch(`http://www.omdbapi.com/?apikey=207af2f4&s=${str}${type !== 'all' ? `&type=${type}` : ''}` )
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
            {/*{this.state.filterType.map((filter) => <Filter filterType={filter}/>)}*/}
            {movies.length ? <Movies movies={movies}/> : <Preloader/>}

        </main>
    )
    }
}

export default Main;