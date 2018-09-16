import React, {Component } from 'react'

class AddNinja extends Component{
    state = {
        name:null,
        age:null
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    };
    handleSubmitn = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.addNinja(this.state);
    };
    render(){
       return ( <div  >
            <form onSubmit={this.handleSubmitn}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={this.handleChange}/>
                <label htmlFor="name">Age:</label>
                <input type="text" id="age" onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
    };
}

export  default AddNinja;