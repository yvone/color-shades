import React, { useState, useEffect } from 'react';
import Values from 'values.js'
import Box from './Box';

// log(color.tint(25))
// //> { rgb: [64, 179, 255], alpha: 1, type: "tint", weight: 25, ...methods }
// log(color.shade(12))
// //> { rgb: [0, 135, 224], alpha: 1, type: "shade", weight: 12, ...methods }
// log(color.tints(8))
// //> (12) [Values...]
// log(color.shades(23))
// //> (4) [Values...]
// log(color.all(20))
// //> (11) [Values...]

// instance example for 'red'
// Values {
//   alpha: 1
//   rgb: (3) [255, 0, 0]
//   type: "base"
//   weight: 0
//   get hex: ƒ(...)
//   setColor: ƒ setColor(color)
//   tint: ƒ tint(weight=50)
//   tints: ƒ tints(weight=10)
//   shade: ƒ shade(weight=50)
//   shades: ƒ shades(weight=10)
//   all: ƒ all(weight=10)
//   hexString: ƒ hexString()
//   rgbString: ƒ rgbString()
//   getBrightness: ƒ getBrightness()
// }

function ValuesContainer({color, variant = 'shades', weight = 10}) {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const [value, setValue] = useState(new Values());

    const handleValue = async () => {
        try {
            setStatus('loading');
            await setValue(value.setColor(color));
            setStatus('complete');
        } catch (error) {
            console.error(error);
            setError('something unexpected just happened, try later');
        }
    }

    useEffect(() => {
        handleValue();
    }, [color]);
    
    if (error) return <p>{error}</p>;

    if (status === 'idle' || status === 'loading') return <p>Loading...</p>;

    // const shades = value[variant](weight);
    const shades = [
        value.tint(90),
        value.tint(68),
        value.tint(44),
        value,
        value.shade(20),
        value.shade(40),
        value.shade(60),
    ];

    return (
        <ul style={{ display: 'flex', listStyle: 'none' }}>
            {shades.map((shade, index) => (
                <Box
                    key={`Values-${shade.weight}-${index}`}
                    color={shade.hexString()}
                />
            ))}
        </ul>
    )
}

export default ValuesContainer;