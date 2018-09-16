import React, { Component } from 'react';


class Ninjas extends Component {

    render() {
        const{ name,age} = this.props;
        console.log(this.props)
        return (
            <div className="ninja">
                <div>Name : {name}</div>
                <div>Name : {this.props.name}</div>
                <div>Age : {age}</div>


            </div>

        );
    }
}

export default Ninjas;
