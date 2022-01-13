import React from 'react';
import { ThemeContext } from '../../ThemesContext';

class Button extends React.Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
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
                        error:true,
                        name: result.login
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: true
                    });
                }
            )
    }

    render() {
        if (!this.state.error) {
            return (
                <button
                    style={{ color: this.context.color }}
                    onClick={this.handleClick}
                >
                    Let's Crash Frontend
                </button>
            );
        } else {
            return (
                <button
                    style={{ color: this.context.theme.color }}
                    onClick={this.handleClick}
                >
                    Let's Crash Frontend
                </button>
            );
        }
    }
}

export default Button;