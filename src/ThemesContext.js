import React from "react";

export const themes = {
        dark: {
                foreground: '#04293A',
                background: '#041C32',
                color: '#ECB365',
                body: {
                        foreground: '#04293A',
                        background: '#041C32',
                },
                header: {
                        color: '#ECB365'
                }
        },
        light: {
                foreground: '#ffffff',
                background: '#DDDDDD',
                color: '#222831',
                body: {
                        foreground: '#DDDDDD',
                        background: '#DDDDDD',
                },
                header: {
                        color: '#222831'
                }
        }
}

export const ThemeContext = React.createContext();