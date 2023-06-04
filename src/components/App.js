import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [boxes,setBoxes]=useState([])
  const HandleClick=()=>{
  const newBoxes={
    width,
    height,
    backgroundColor
  }
  setBoxes([...boxes,newBoxes])
  setWidth("")
  setHeight("")
  setBackgroundColor("")
  }
  const HandleChange1=(event)=>{
    setWidth(event.target.value)
  }
  const HandleChange2=(event)=>{
    setHeight(event.target.value)
  }
  const HandleChange3=(event)=>{
    setBackgroundColor(event.target.value)
  }

  return (
    <div id="main">
      <h1>Box Creator</h1>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="number"
          value={width}
          onChange={HandleChange1}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="number"
          value={height}
          onChange={HandleChange2}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"
          value={backgroundColor}
          onChange={HandleChange3}
        />
      </div>
      <button className='create-btn' onClick={HandleClick}>Create Box</button>
      <div id="box-container">
        {boxes.map((data=>{
        return  <div style={{width:`${data.width}px`,
          height:`${data.height}px`,
          backgroundColor:data.backgroundColor
          }}>

          </div>
        }))}
      </div>
    </div>
  );
};


export default App;
