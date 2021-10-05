import React from 'react';

function Box({color}) {
    return (
    	<div>
	        <div style={{
	            width: '100px',
	            height: '100px',
	            backgroundColor: color,
	        }} />
	        <p>{color.toUpperCase()}</p>
        </div>
    )
}

export default Box;