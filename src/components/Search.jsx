import React from "react";


export default class Search extends React.Component {
    state = {
        search: '',

    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.handlePress(this.state.search);
        }

    }

    render() {


        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field ">
                        <input
                            className="validate"
                            placeholder='search'
                            type="search"
                            value={this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}
                        />
                        <button className='btn' onClick={() => this.props.handlePress(this.state.search)}>Search</button>
                    </div>
                </div>
            </div>
        )

    }

}