import React from 'react';
import chroma from 'chroma-js';
import Box from './Box';

// chroma.mix('red', 'blue', 0.5, 'rgb');
// chroma.mix('red', 'blue', 0.5, 'hsl');
// chroma.mix('red', 'blue', 0.5, 'lab');
// chroma.mix('red', 'blue', 0.5, 'lch');
// chroma.mix('red', 'blue', 0.5, 'lrgb');

function Chroma({color}) {
	// const shades = chroma.scale(['white', color, 'black']).colors(20);
    const shades = [
        chroma.mix(color, '#fff', 0.827).hex(),
        chroma.mix(color, '#fff', 0.502).hex(),
        chroma.mix(color, '#fff', 0.233).hex(),
        chroma(color).hex(),
        chroma.mix(color, '#000', 0.36).hex(),
        chroma.mix(color, '#000', 0.64).hex(),
        chroma.mix(color, '#000', 0.84).hex(),
    ]

    return (
        <ul style={{ display: 'flex', listStyle: 'none' }}>
            {shades.map((chromaColor, index) => (
                <Box
                    key={`Chroma-${chromaColor}-${index}`}
                    color={chromaColor}
                />
            ))}
        </ul>
    )
}

export default Chroma;