import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [catchphrase, setCatchphrase] = useState('');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);

  return (
    <main>
      <Preview {...{ head, middle, bottom, catchphrase, headCount, middleCount, bottomCount }} />
      <Editor
        {...{
          setHead,
          setMiddle,
          setBottom,
          setCatchphrase,
          setHeadCount,
          setMiddleCount,
          setBottomCount,
        }}
      />
      {!!headCount && <p>You changed the Head {headCount} times</p>}
      {!!middleCount && <p>You changed the Middle {headCount} times</p>}
      {!!bottomCount && <p>You changed the Bottom {headCount} times</p>}
    </main>
  );
}
