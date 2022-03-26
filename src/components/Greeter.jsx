import React from 'react';
class Greeter extends React.Component {
    render(){
        console.log("props", this.props)
        return(
            <>
            <h2>Hello Again! {this.props.name}</h2>
            <p>I am {this.props.age} years old</p>
            </>
        )
    }
}

export default Greeter;

// props is whatever you name it "name, age" which is referenced in app.js