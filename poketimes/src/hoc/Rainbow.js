import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'orange', "green"];
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    const className = randomColour+'-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>

            <p>Lorem Ipsum nor</p>
            </div>
        )
    }
};

export default Rainbow