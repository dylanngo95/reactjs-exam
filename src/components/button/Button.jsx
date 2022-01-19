import React from 'react';
import { ThemeContext } from '../../ThemesContext';

class Button extends React.Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.state = {
            result: null,
            error: false
        }
    }

    handleClick = () => {
        fetch("https://api.github.com/users/dylanngo95")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        error: false,
                        result: result
                    });
                }
            )
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <button
                    style={{ color: this.context.color }}
                    onClick={this.handleClick}
                >
                    Let is Crash Frontend
                </button>
            );
        } else {
            return (
                <button
                    style={{ color: this.context.color }}
                    onClick={this.handleClick}
                >
                    {this.state.result.login.name.c}
                </button>
            );
        }
    }
}

export default Button;