import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Name</label><br />
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} /><br />
                <label>Job</label><br />
                <input 
                    type="text" 
                    name="job" 
                    value={job} 
                    onChange={this.handleChange} /><br />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;