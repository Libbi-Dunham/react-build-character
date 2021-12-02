import React from 'react';

export default function Editor({
  catchphrase,
  setHeadCount,
  setMiddleCount,
  setBottomCount,
  setHead,
  head,
  middle,
  bottom,
  setMiddle,
  setBottom,
  setCatchphrase,
  setCatchphraseList,
  // setCatchphraseCount,
  // handleHeadCount,
  // handleMiddleCount,
  // handleBottomCount,
  // handleClick,
  // handleCatchphraseCount,
}) {
  const handleClick = () => {
    setCatchphraseList((prevState) => [...prevState, catchphrase]);

    setCatchphrase('');
  };

  // const handleCatchphraseCount = (e) => {
  //   setCatchphrase(e.target.value);
  //   setCatchphraseCount((prevState) => prevState + 1);
  // };

  const handleHeadCount = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };

  const handleMiddleCount = (e) => {
    setMiddle(e.target.value);
    setMiddleCount((prevState) => prevState + 1);
  };

  const handleBottomCount = (e) => {
    setBottom(e.target.value);
    setBottomCount((prevState) => prevState + 1);
  };

  return (
    <>
      <div className="editor">
        <label>Head</label>
        <select value={head} onChange={handleHeadCount}>
          <option value="Bird">Bird</option>
          <option value="Duck">Duck</option>
          <option value="Dog">Dog</option>
          <option value="Horse">Horse</option>
        </select>
      </div>

      <div className="editor">
        <label>Middle</label>
        <select value={middle} onChange={handleMiddleCount}>
          <option value="Blue">Blue</option>
          <option value="Fancy">Fancy</option>
          <option value="Pink">Pink</option>
          <option value="Red">Red</option>
        </select>
      </div>

      <div className="editor">
        <label>Bottom</label>
        <select value={bottom} onChange={handleBottomCount}>
          <option value="leg">Single Leg</option>
          <option value="white">White Pants</option>
          <option value="blue">Blue Jeans</option>
          <option value="dog">Dog Pants</option>
        </select>
      </div>

      <div className="editor">
        <label>Catch Phrase!</label>
        <input type="text" onChange={(e) => setCatchphrase(e.target.value)} />
        <button onChange={handleClick}>Add!</button>
      </div>
    </>
  );
}
