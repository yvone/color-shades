import React from 'react';

function Box({color}) {
    return (
        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: color,
        }} />
    )
}

export default Box;