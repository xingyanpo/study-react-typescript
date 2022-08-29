import React, {useState, useRef} from 'react'

export default function App() {
  const mytext = useRef<HTMLInputElement>(null)
  const [list, setList] = useState<string[]>([])
  return (
    <div>
      <input ref={mytext}></input>
      <button onClick={() => {
        console.log((mytext.current as HTMLInputElement).value)
        setList([...list, (mytext.current as HTMLInputElement).value])
      }}>click</button>

      <div>
        {
          list.map((item, index) => 
            <li key={item + index}>{item}</li>
          )
        }
      </div>
    </div>
  )
}
