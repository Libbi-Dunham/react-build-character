import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [catchphrase, setCatchphrase] = useState('');

  return (
    <main>
      <Preview {...{ head, middle, bottom, catchphrase }} />
      <Editor {...{ setHead, setMiddle, setBottom, setCatchphrase }} />
    </main>
  );
}
