import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'World'
    };

    handleWorldButtonClick = () => {
        this.setState({
            who: 'World'
        })
    }

    handleFriendButtonClick = () => {
        this.setState({
            who: 'Friend'
        })
    }

    handleReactButtonClick = () => {
        this.setState({
            who: 'React'
        })
    }


    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleWorldButtonClick}>World</button>
                <button onClick={this.handleFriendButtonClick}>Friend</button>
                <button onClick={this.handleReactButtonClick}>React</button>
            </div>
        )
    }

}

export default HelloWorld;