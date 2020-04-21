import React, { useState } from 'react';

const OnOffButton = () => {
    // State
    const [isOn, setIsOn] = useState(true);
    // console.log('OnOffButton, isOn=', isOn);

    // Logic / code
    let buttonText = 'Turn OFF';
    if( !isOn ) buttonText = 'Turn ON';
    // Alternative syntax
    // let buttonText = '';
    // if( isOn ) buttonText = 'Turn OFF';
    // else       buttonText = 'Turn ON';

    // Return JSX
    return (
        <button onClick={() => setIsOn(!isOn)}> {buttonText} </button>
    ) // onClick, onChange, onMouseMove...
}

export default OnOffButton;
