import React, {useState} from 'react';
import ColorPicker from './ColorPicker';
import ValuesContainer from './Values';
import Shades from './Shades';
import Chroma from './Chroma';
import './App.css';

const variants = ['shades', 'tints', 'all'];

function App() {
  const [color, setColor] = useState('black');
  const [variant, setVariant] = useState('shades');
  const [weight, setWeight] = useState(10);

  function handleChangeVariant(event) {
    setVariant(event.target.name);
  }

  function handleChangeWeight(event) {
    setWeight(Number(event.target.value));
  }

  return (
    <div className="App">
      <ColorPicker
        color={color}
        setColor={setColor}
      />

      {/*<p>Variant:</p>
      {variants.map(variantOpt => {
        let isChecked = variantOpt === variant;
        return (
          <div key={variantOpt}>
            <input
              type="radio"
              id={variantOpt}
              name={variantOpt}
              value={variantOpt}
              checked={isChecked}
              onChange={handleChangeVariant}
            />
            <label htmlFor={variantOpt}>{variantOpt}</label>
          </div>
        )
      })}

      <label htmlFor="weight">
        Weight: {weight}
      </label>
      <input
        type="range"
        id="weight"
        name="weight"
        min="5" max="100" step="5"
        value={weight}
        onChange={handleChangeWeight}
      />*/}

      {<ValuesContainer
        color={color}
        variant={variant}
        weight={weight}
      />}

      {/*<Shades color={color} />*/}

      {<Chroma color={color} />}
    </div>
  );
}

export default App;
