import React from 'react';
import { colors } from 'spoton-lib';

const colorsArr = [
    //$base50: #77819c;
    colors.base50,
    //$primary50: #1769ff;
    colors.primary50,
    //$informative50: #705cd6;
    colors.informative50,
    //$success50: #00ab4f;
    colors.success50,
    //$warning50: #ffc043;
    colors.warning50,
    //$danger50: #f73e3c;
    colors.danger50,
    //$loyalty50: #cc9a36;
    colors.loyalty50,
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