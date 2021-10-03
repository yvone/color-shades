import React, {useState, useEffect} from 'react';
import Color from 'color';
import Box from './Box';

function calculateGradient(color, isDark, opacity) {
    return isDark
        ? color.mix(Color('black'), opacity).rgb().round()
        : color.mix(Color('white'), opacity).rgb().round();
}

function calcAllGradients(color) {
    const gradientArr = [];
    for (let opac = 90; opac >= 5; opac -= 5) {
        const newColor = calculateGradient(color, false, opac / 100);
        gradientArr.push({
            hex: newColor.hex(),
            rgb: newColor.rgb().array(),
            contrastRatio: color.contrast(newColor),
            contrastLevel: color.level(newColor),
            isDark: newColor.isDark(),
        });
    }
    return gradientArr;
}

function Shades({color: initialColor}) {
    const [color, setColor] = useState(Color(initialColor));

    const handleColorChange = async () => {
        await setColor(Color(initialColor));
    }

    useEffect(() => {
        handleColorChange();
    }, [initialColor]);

    const shades = calcAllGradients(color);
    return (
        <ul style={{ display: 'flex', listStyle: 'none' }}>
            {shades.map(shade => (
                <Box
                    key={`Shades-${shade.hex}`}
                    color={`rgb(${shade.rgb.toString()})`}
                />
            ))}
        </ul>
    )
}

export default Shades;