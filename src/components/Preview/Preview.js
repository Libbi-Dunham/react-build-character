import React from 'react';

import './Preview.css';

export default function Preview({
  head,
  middle,
  bottom,
  catchphrase,
  // setHeadCount,
  // setMiddleCount,
  // setBottomCount,
  // setHead,
  // setMiddle,
  // setBottom,
}) {
  return (
    <>
      <div className={`preview ${catchphrase}`}>
        <img height="75" alt={head} src={`${process.env.PUBLIC_URL}/${head}-head.png`} />
        <img height="75" alt={middle} src={`${process.env.PUBLIC_URL}/${middle}-middle.png`} />
        <img height="75" alt={bottom} src={`${process.env.PUBLIC_URL}/${bottom}-pants.png`} />
        <p> {catchphrase} </p>
      </div>
      {/* <div>
        <p>You changed the head {setHeadCount} times</p>
        <p>You changed the middle {setMiddleCount} times</p>
        <p>You changed the Bottom {setBottomCount} times</p>
      </div> */}
    </>
  );
}
