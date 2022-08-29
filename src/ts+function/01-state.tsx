import React, {useState} from 'react'

export default function App() {
  const [name, setName] = useState('hhh')
  return (
    <div>
      app-{name.substring(0, 1).toUpperCase()+name.substring(1)}
      <button onClick={() => {
        setName('kkk')
      }}>click</button>
    </div>
  )
}
