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
            .then(data => this.setState({movies: data.Search, loading: false}))

    }

    handlePress = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=207af2f4&s=${str}${type !== 'all' ? `&type=${type}` : ''}` )
            .then(r => r.json())
            .then(data => this.setState({movies: data.Search, loading: false}))

    }


    render() {
        const {movies, loading} = this.state;



        return (

        <main className='container content'>
            <Search
                handlePress={this.handlePress}
            />
            {/*{this.state.filterType.map((filter) => <Filter filterType={filter}/>)}*/}
            {!loading ? <Movies movies={movies}/> : <Preloader/>}

        </main>
    )
    }
}

export default Main;