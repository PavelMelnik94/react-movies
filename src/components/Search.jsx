import React, { useState } from "react";


const Search = (props) => {

    const {
        handlePress = Function.prototype,
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            handlePress(search, type);
        }
    };

    const handleFilter = (e) => {
        setType(e.target.dataset.type);
        handlePress(search, e.target.dataset.type);
    };


        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field ">
                        <input
                            className="validate"
                            placeholder='search'
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleKey}
                        />
                        <button className='btn search-btn'  onClick={ () => handlePress(search, type) }>Search</button>
                    </div>
                </div>

                <div>
                    <p >
                        <label className='radio'>
                            <input
                                className="with-gap"
                                name="type" type="radio"
                                data-type='all'
                                onChange={handleFilter}
                                checked={type === 'all'}
                            />

                            <span>All</span>
                        </label>

                        <label className='radio'>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type='movie'
                                onChange={handleFilter}
                                checked={type === 'movie'}
                            />
                            <span>Movies only</span>
                        </label>

                        <label className='radio'>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type='series'
                                onChange={handleFilter}
                                checked={type === 'series'}
                            />
                            <span>Series only</span>
                        </label>
                    </p>
                </div>
            </div>
        )

    }



export default Search;