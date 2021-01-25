import logo from './logo.svg';
import './App.css';
import React from 'react'

// <div className="App">
//  <p>abc</p>
// </div>

// UPDATE: This is also valid, but must be set as UPPERCASE var
/* 
    const CustomTag = `h${this.props.priority}`;
    <CustomTag>Hello</CustomTag>
*/



function App() {
  const p =    React.createElement('p', {}, 'Abc')
  const div = React.createElement('div', { className: 'App'}, 
p
  );``
  return  div
}

export default App;
