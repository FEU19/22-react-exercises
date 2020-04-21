import React from 'react';
import './App.css';
import Fancy from './components/Fancy';

// It's possible (but not recommended) to have several components in the same file
const Armadillo = () => ( <span> poor dillo </span> )


const App = () => (
    <div>
        <h1>App name</h1>
        <Armadillo />
        <Fancy text={'here is some text'}   color={'#89C8C1'} />
        <Fancy text={'another text'}        color={'#F6C000'} />
        <Fancy text={'something different'} color={'#6495ED'} />
    </div>
);



export default App;
