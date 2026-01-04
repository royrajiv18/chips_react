import React, { useState } from 'react';
import './styles.css'
function ChipsInput() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([])

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim()!=="") {
      // add chips
      setChips(prev => [...prev, inputText]);
      setInputText("");
    }

  }

  const handleDeleteChip = (index) => {
    const copyChips = [...chips];
    copyChips.splice(index,1)
    setChips(copyChips);
  }

  return (
    <div className='main-container'>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className="input"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div style={{display:'flex'}}>
        {chips.map((chip, index) => <div style={{ background: 'gray', margin: '10px', padding: '5px', color: 'white', borderRadius: '3px' }}>
          {chip}
          <button style={{ color: 'Red' }} onClick={() => handleDeleteChip(index)}>X</button>
        </div>)}
      </div>

    </div>
  );
}

export default ChipsInput;
