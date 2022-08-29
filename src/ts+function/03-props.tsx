import React, {useState} from 'react'

export default function App() {
  const [isShow, setIsShow] = useState<boolean>(true)
  return (
    <div>
      <Children name='hhh' cb={()=>{
        setIsShow(!isShow)
      }}></Children>
      {isShow && <div>我是显隐组件</div>}
    </div>
  )
}

interface IProps {
  name?: string,  // 可选，可以传可以不穿
  cb: ()=> void
}


function Children(props:IProps) {
  return (
    <div>
      <button onClick={() => {
        props.cb()
      }}>click</button>
    </div>
  )
}
