import React from 'react';

export default function Editor({ setHead, setMiddle, setBottom, setCatchphrase }) {
  return (
    <>
      <div className="editor">
        <label>Head</label>
        <select onChange={(e) => setHead(e.target.value)}>
          <option value="Bird">Bird</option>
          <option value="Duck">Duck</option>
          <option value="Dog">Dog</option>
          <option value="Horse">Horse</option>
        </select>
      </div>

      <div className="editor">
        <label>Middle</label>
        <select onChange={(e) => setMiddle(e.target.value)}>
          <option value="Blue">Blue</option>
          <option value="Fancy">Fancy</option>
          <option value="Pink">Pink</option>
          <option value="Red">Red</option>
        </select>
      </div>

      <div className="editor">
        <label>Bottom</label>
        <select onChange={(e) => setBottom(e.target.value)}>
          <option value="Single-Leg">Single Leg</option>
          <option value="White-Pants">White Pants</option>
          <option value="Blue-Jeans">Blue Jeans</option>
        </select>
      </div>

      <div className="editor">
        <label>Catch Phrase!</label>
        <input type="text" onChange={(e) => setCatchphrase(e.target.value)} />
        <button>Add!</button>
      </div>
    </>
  );
}
