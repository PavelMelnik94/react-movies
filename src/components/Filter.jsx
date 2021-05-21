import React from "react";

export default class Filter extends React.Component {
    state = {
        sdsd: '',
        filter: ''
    }

    componentDidMount() {
        this.setState({filter: this.props.filterType})
    }

    onSelect = () => {
    }


    render() {
        return (
            <span className='radio'>

                {this.props.filterType === 'All'
                    ?
                    <input name='filter' type="radio"  id={this.props.filterType} />
                    :
                    <input name='filter' type="radio" id={this.props.filterType} />
                }
                    <label for={this.props.filterType}>{this.props.filterType}</label>

                </span>
                )

    }
}