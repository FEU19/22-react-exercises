import React from 'react';

// const exampleObject = {
//     color: '#89C8C1'
// };

const Fancy = ({ text, color }) => (
    <p style={{ color: color }}>
        {text}
    </p>
)

export default Fancy;
