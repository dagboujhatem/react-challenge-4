import React, { Component } from 'react'

export class TestLocal extends Component {

    state ={
        chaine: 'heloo'
    }
    // componentWillUpdate(nextProps, nextState) {
    //     localStorage.setItem('contacts','something');
    // }
    componentDidMount() {
        localStorage.setItem('contacts', JSON.stringify(this.state.chaine));
    }
    
 
handleChange = () => {
    this.setState({
        chaine: 'hello'
    })
}
    render() {
        return (
            <div>
                <h1>{this.state.chaine}</h1>
                <button onClick={this.handleChange}>change</button>
            </div>
        )
    }
}

export default TestLocal
