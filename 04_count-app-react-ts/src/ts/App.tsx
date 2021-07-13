import React from 'react'
import {useState} from 'react';

function App() {
  // state取得
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("10未満");

  // カウントを加算する
  const doCountUp = (): void => {
    // カウントを加算
    let nextCount: number = count + 1;
    setCount(nextCount);

    // メッセージ更新
    let nextMessage: string = "10未満";
    let isTenOver: boolean = nextCount >= 10;
    if (isTenOver) {
      nextMessage = "10を超えたね";
    }
    setMessage(nextMessage);
  }

  return (
      <div>
        <h1>カウントAPP</h1>
        <div>{count}</div>
        <button onClick={doCountUp}>プラス</button>
        <div>{message}</div>
      </div>
  );
}
export default App;