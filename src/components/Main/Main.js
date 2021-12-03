import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';
import background from '../../background.jpg';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [catchphrase, setCatchphrase] = useState('');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [catchphraseList, setCatchphraseList] = useState([]);

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Preview
        {...{
          head,
          middle,
          bottom,
          catchphrase,
          headCount,
          middleCount,
          bottomCount,
          setCatchphrase,
          catchphraseList,
        }}
      />
      <Editor
        {...{
          setHead,
          catchphrase,
          setMiddle,
          setBottom,
          setCatchphrase,
          setHeadCount,
          setMiddleCount,
          setBottomCount,
          setCatchphraseList,
        }}
      />
      {!!headCount && <p>You changed the Head {headCount} times</p>}
      {!!middleCount && <p>You changed the Middle {middleCount} times</p>}
      {!!bottomCount && <p>You changed the Bottom {bottomCount} times</p>}
      {!!catchphraseList && <p>{catchphraseList}</p>}
    </main>
  );
}
