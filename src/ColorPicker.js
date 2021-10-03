import React from 'react';

const colors = ['black', 'red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple'];

function ColorPicker(props) {
    return (
        <ul style={{ display: 'flex', listStyle: 'none' }}>
            {colors.map(color => {
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
                    </li>
                )
            })}
        </ul>
    )
}

export default ColorPicker;