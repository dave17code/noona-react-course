import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 0
  const [counter2, setCounter2] = useState(0)
  const increase = () => {
    counter += 1
    setCounter2(counter2 + 1)
    console.log("counter는", counter, "counter2 state는", counter2)
  }

  // 1. 유저가 버튼을 클릭한다
  // 2. counter+1해서 1이됨
  // 3. setState 함수 호출 (예약)
  // 변수 값은 1로 보이고 state 값은 아직 안변했기 때문에 그 전에 값이 보인다
  // 이벤트 핸들러 함수 끝
  // 예약되어 있던 setState 함수 처리
  // app 다시 rerender
  // let counter = 0 을 거치면서 counter 값은 다시 0으로 초기화
  // 업데이트된 state 값이 보인다
  return (
    <>
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </>
  )
}

export default App