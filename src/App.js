import logo from './logo.svg';
import './App.css';
import React from 'react'

```// <div className="App">
    //  <p>abc</p>
    // </div>```

function App() {
  const p =    React.createElement('p', {}, 'Abc')
  const div = React.createElement('div', { className: 'App'}, 
p
  );``
  return  div
}

export default App;