import React from 'react';

import './Preview.css';

export default function Preview({ head, middle, bottom, catchphrase }) {
  return (
    <div className={`preview ${catchphrase}`}>
      <p> {head} </p>
      <p> {middle} </p>
      <p> {bottom} </p>
      <p> {catchphrase} </p>
    </div>
  );
}
