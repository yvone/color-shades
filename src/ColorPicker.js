import React from 'react';

const colorsArr = [
    // base50,
    '#77819c',
    // primary50,
    '#1769ff',
    // informative50,
    '#705cd6',
    // success50,
    '#00ab4f',
    // warning50,
    '#ffc043',
    // danger50,
    '#f73e3c',
    // loyalty50,
    '#cc9a36',
];

function ColorPicker(props) {
    return (
        <ul style={{ display: 'flex', listStyle: 'none' }}>
            {colorsArr.map(color => {
                let isSelected = color === props.color;
                return (
                    <li
                        key={color}
                        style={{ 
                            padding: isSelected ? '5px' : '0',
                        }}
                    >
                        <button
                            style={{
                                width: isSelected ? '50px' : '30px',
                                height: isSelected ? '50px' : '30px',
                                border: '0',
                                backgroundColor: color,
                            }}
                            type="button"
                            onClick={() => props.setColor(color)}
                        />
                        {isSelected ? (
                            <p>{color.toUpperCase()}</p>
                        ) : null}
                    </li>
                )
            })}
        </ul>
    )
}

export default ColorPicker;