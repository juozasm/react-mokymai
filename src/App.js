import logo from "./logo.svg"
import "./App.css"
import Text, { Name } from "./Text"
import vars from "./variables"

import React, { Component } from "react"


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: "white",
            showText: false,
            obj: {}
        }
    }

    componentDidMount() {
        console.log("mounted")
    }

    componentDidUpdate() {
        console.log("updated")
    }

    render() {
        console.log("rendered")
       
        return (
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    backgroundColor: this.state.backgroundColor,
                }}
            >
                <button
                    onClick={() => {
                        this.setState({
                            backgroundColor: "blue",
                        })
                        setTimeout(
                            () =>
                                this.setState((state) => {
                                    console.log(state.backgroundColor)
                                    return {
                                        backgroundColor: "green",
                                    }
                                }),
                            2000
                        )
                    }}
                >
                    PAKEISTI SPALVA
                </button>

                <button
                    onClick={() => this.setState((state) => ({ showText: !state.showText}))}
                >
                    {this.state.showText ? "Hide" : "Show"} TEXT
                </button>

                {this.state.showText && <Text x={{}}>MANO VAIKAI</Text>}
            </div>
        )
    }
}
