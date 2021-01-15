import logo from './logo.svg';
import './App.css';
import Text, { Name } from './Text'
import vars from './variables';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      backgroundColor: 'white'
    }
  }

  render() {
    console.log('rendered')
    return (
      <div style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: this.state.backgroundColor
      }}>
        <button onClick={()=> {
          this.setState({
            backgroundColor: 'blue'
          })
          setTimeout(()=>this.setState(state => {
            console.log(state.backgroundColor)
            return {
            backgroundColor: 'green'
          }
          }), 2000)
          }}>PAKEISTI SPALVA</button>
      </div>
    )
  }
}
