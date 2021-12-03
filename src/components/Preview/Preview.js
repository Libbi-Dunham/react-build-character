import React from 'react';

import './Preview.css';

export default function Preview({ head, middle, bottom, catchphrase }) {
  return (
    <>
      <div className="clothes">
        <img height="75" alt={head} src={`${process.env.PUBLIC_URL}/${head}-head.png`} />
        <img height="75" alt={middle} src={`${process.env.PUBLIC_URL}/${middle}-middle.png`} />
        <img height="75" alt={bottom} src={`${process.env.PUBLIC_URL}/${bottom}-pants.png`} />
        <p> {catchphrase} </p>
      </div>
    </>
  );
}
