import React, { useState } from 'react'

export default function App() {
  const texts = ['abc', 'ab', 'cd', 'aaa']
  const [search, setSearch] = useState('')
  const [colors, setColors] = useState({
    backgroundColor: 'white',
    color: 'green'
  })
  const [vh, setVh] = useState(100)

  const handle = ()=>{
    setVh(state => state / 2)
    setVh(state => state / 2)
  }
  
  // const [a, b] = [1, 2]
  // const a = 1, const b = 2
  // const { a, b } = { a: 2, c: undefined }
  // a = 2 b = undefined
  return (
    <div style={{
      backgroundColor: colors.backgroundColor,
      width: '100%',
      height: `${vh}vh`,
      color: colors.color
    }}>
      <button onClick={()=>setColors((state)=>({ 
        ...state,
        backgroundColor: 'red' }))}>CHANGE BG COLOR</button>
      <p> ASD ASD ASD
      </p>
      <button onClick={handle}>HALF OF SIZE</button>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text"/>
      {texts.filter(text => text.includes(search)).map((val)=><p key={val}>{val}</p>)}
    </div>
  )
}
